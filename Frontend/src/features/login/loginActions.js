import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:3000/login';

export const login = createAsyncThunk(
  'login/login',
  async ({username, email, password}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${backendURL}`,
        { username, email, password },
        config
      );

      if (res.status === 200){
        console.log('[LoginActions.js] Login successful');
        console.log('[LoginActions.js] res.data: ', res.data);
        return res.data.user;
      }
      if (res.status === 400){
        console.log('[LoginActions.js] Login failed');
        console.log('[LoginActions.js] res.data: ', res.data);
        throw new Error(res.data.message);
      }

    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
