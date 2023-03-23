import React, { useState } from 'react';

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const S3_BUCKET = 'sight-image-bucket-323';
const REGION = 'us-east-1';

export const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    
    async function uploadFile () {
        const creds = {
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        }

        const s3 = new S3Client({
        region: REGION,
        credentials: creds
        });
        
        const command = new PutObjectCommand({
            Bucket: S3_BUCKET,
            Key: selectedFile.name,
            Body: selectedFile,
          });

        try {
            const response = await s3.send(command);
            console.log('RESPONSE:', response);
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


