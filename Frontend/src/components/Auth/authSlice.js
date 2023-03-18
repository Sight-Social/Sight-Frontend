import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('user.tokens[0].token'),
    isAuthenticated: false,
  },
  reducers: {
    setToken(state, action) {
      state.tokens = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user.tokens', action.payload);
    },
    clearToken(state) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user.tokens.token');
    },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
