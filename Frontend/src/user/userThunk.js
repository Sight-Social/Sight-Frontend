import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const updateUsername = createAsyncThunk(
    'user/updateUsername',
    async ({oldUsername, newUsername}, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            console.log('[userThunk.js] updateUsername called');
            console.log('[userThunk.js] username: ', oldUsername);
            console.log('[userThunk.js] newUsername: ', newUsername);
            
            const backendURL = `http://localhost:3000/user/${oldUsername}/update`;
            
            const res = await axios.put(
                `${backendURL}`,
                { username: newUsername },
                config
            );
            console.log('[userThunk.js] res: ', res)

            if (res.status === 200){
                console.log('[userThunk.js] updateUsername successful');
                console.log('[userThunk.js] res.data: ', res.data);
                return res.data;
            }
            if (res.status === 400){
                console.log('[userThunk.js] updateUsername failed');
                console.log('[userThunk.js] res.data: ', res.data);
                throw new Error(res.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)