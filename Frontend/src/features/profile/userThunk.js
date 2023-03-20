import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addInsightToFocalPoint = createAsyncThunk(
  'focalPoint/addInsightToFocalPoint',
  async (
    { sightToken, username, focalpointId, insight, focalpointIndex },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log('[userThunk.js] addInsightToFocalPoint called');
      console.log('[userThunk.js] username: ', username);
      console.log('[userThunk.js] focalPointId: ', focalpointId);
      console.log('[userThunk.js] insight: ', insight);

      const backendURL = `http://localhost:3000/user/${username}/focalpoints/${focalpointId}`;

      const res = await axios.post(
        `${backendURL}`,
        {
          username: username,
          focalpointId: focalpointId,
          insight: insight,
          token: sightToken,
        },
        config
      );
      console.log('[focalPointThunk.js] res: ', res);

      if (res.status === 201) {
        console.log('[focalPointThunk.js] addInsightToFocalPoint successful');
        console.log('[focalPointThunk.js] res.data: ', res.data);
        let payload = {
          insight: res.data,
          focalpointId: focalpointId,
          index: focalpointIndex,
        };
        return payload;
      }
      if (res.status === 400) {
        console.log('[focalPointThunk.js] addInsightToFocalPoint failed');
        console.log('[focalPointThunk.js] res.data: ', res.data);
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUsername = createAsyncThunk(
  'user/updateUsername',
  async ({ oldUsername, newUsername }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log('[userThunk.js] updateUsername called');
      console.log('[userThunk.js] username: ', oldUsername);
      console.log('[userThunk.js] newUsername: ', newUsername);

      const backendURL = `http://localhost:3000/user/${oldUsername}/update`;

      const res = await axios.put(
        `${backendURL}`,
        { username: newUsername },
        config
      );
      console.log('[userThunk.js] res: ', res);

      if (res.status === 200) {
        console.log('[userThunk.js] updateUsername successful');
        console.log('[userThunk.js] res.data: ', res.data);
        return res.data;
      }
      if (res.status === 400) {
        console.log('[userThunk.js] updateUsername failed');
        console.log('[userThunk.js] res.data: ', res.data);
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
