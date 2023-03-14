import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser, clearUser } from '../../user/userSlice';

const backendURL = 'http://localhost:3000/login';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  username: '',
  email: '',
  password: '',
  googleId: '',
  avatar: '',
  focalpoints: [],
  pinned_insights: [],
};

export const login = createAsyncThunk(
  'login/login',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${ backendURL }`,
        { username, email, password },
        config
      );

      if (res.status === 200) {
        console.log('[LoginActions.js] Login successful');
        console.log('[LoginActions.js] res.data: ', res.data);
        return res.data.user;
      } else if (res.status === 400) {
        console.log('[LoginActions.js] Login failed');
        console.log('[LoginActions.js] res.data: ', res.data);
        throw new Error(res.data.message);
      }

    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.isAuthenticated = false;
          state.loading = false;
          state.error = 'Login failed';
        } else {
          console.log('[LoginSlice.js] login.fulfilled payload: ', payload);
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { login, logout, signup } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */
export const email = (state) => state.user.email;
export const username = (state) => state.user.username;
export const password = (state) => state.user.password;
export const focalpoints = (state) => state.user.focalpoints;
export const pinned_insights = (state) => state.user.pinned_insights;

export default loginSlice.reducer;
