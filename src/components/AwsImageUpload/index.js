import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFocalpointImage } from '../../features/focalpoints/focalpointSlice';

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

  async function uploadFile() {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('key', selectedFile.name);
      formData.append('focalpointIndex', focalpointIndex);
      formData.append('focalpointId', focalpointId);

      await dispatch(
        updateFocalpointImage({ formData, sightToken, focalpointIndex })
      );
    } catch (err) {
      console.error('ERR:', err);
    }
  }

  return (
    <div>
      <input
        type='file'
        onChange={handleFileInput}
        style={{ color: 'white' }}
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};
