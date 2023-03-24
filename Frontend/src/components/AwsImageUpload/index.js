import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFocalpointImage } from '../../features/focalpoints/focalpointSlice';
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const S3_BUCKET = 'sight-image-bucket-323';
const REGION = 'us-east-1';

export const UploadImage = () => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const sightToken = useSelector((state) => state.profile.tokens.sightToken);
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    
    /* USE THE URL TO KNOW WHICH FOCAL POINT IS SELECTED  */
    const focalpoints = useSelector((state) => state.focalpoint.fp_array);
    let url = window.location.href;
    let spliturl = url.split('/');
    let focalpointId = spliturl[spliturl.length - 1];
    const focalpointIndex = focalpoints.findIndex(
        (focalpoint) => focalpoint._id === focalpointId
    );

    
    async function uploadFile () {
        const creds = {
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        }

        const s3Client = new S3Client({
            region: REGION,
            credentials: creds
        });
        
        const command = new PutObjectCommand({
            Bucket: S3_BUCKET,
            Key: selectedFile.name,
            Body: selectedFile,
          });
        
        /* const getCommand = new GetObjectCommand({
            Bucket: S3_BUCKET,
            Key: selectedFile.name,
        }); */
        
        try {
            const response = await s3Client.send(command);
            console.log('RESPONSE:', response);
            const url = `https://${S3_BUCKET}.s3.amazonaws.com/${selectedFile.name}`;
            console.log('Image URl:', url);
            await dispatch(updateFocalpointImage({ imageUrl: url, focalpointIndex: focalpointIndex, focalpointId: focalpointId, sightToken: sightToken}));
            
            /* const getResponse = await s3Client.send(getCommand);
            const str = await getResponse; /* Body.transformToString() */ 
          } catch (err) {
            console.error('ERR:', err);
          }
    };

  return (
    <div>
      <input type="file" onChange={handleFileInput} style={{color:'white'}}/>
      <button onClick={uploadFile} >Upload</button>
    </div>
  );
};


