import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setUser } from '../../user/userSlice';
import axios from 'axios';

const backendURL = 'http://localhost:3000/login';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  username: '',
  email: '',
  password: '',
  avatar: '',
  tokens: [],
  isAuthenticated: false,
  subscriptions: [],
  focalpoints: [],
  pinnedInsights: [],
  filters: []
};

export const login = createAsyncThunk(
  'login/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${ backendURL }`,
        { username, password },
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
          state.loading = false;
          state.error = 'Login failed';
          state.isAuthenticated = false;
        } else {
          console.log('[LoginSlice.js] login.fulfilled payload: ', payload);
          state.loading = false;
          state.success = true;
          setUser(state, payload);
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log('[LoginSlice.js] login.rejected payload: ', payload)
        alert('Login failed. Please try again.');
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {  } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */
export const email = (state) => state.user.email;
export const username = (state) => state.user.username;
export const password = (state) => state.user.password;
export const avatar = (state) => state.user.avatar;
export const tokens = (state) => state.user.tokens;
export const isAuthenticated = (state) => state.user.isAuthenticated;
export const subscriptions = (state) => state.user.subscriptions;
export const focalpoints = (state) => state.user.focalpoints;
export const pinnedInsights = (state) => state.user.pinnedInsights;
export const filters = (state) => state.user.filters;

export default loginSlice.reducer;
