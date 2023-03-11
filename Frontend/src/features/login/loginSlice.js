import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* import { fetchCount } from './counterAPI'; */

/* LOGIN SLICE */
const initialState = {
  username: '',
  email: '',
  password: '',
  googleId: '',
  accessToken: '',
  avatar: '',
};

/* WHAT IS A SLICE?
A slice is the portion of Redux code that relates to a specific set of data and 
actions within the store 's state. A slice reducer is the reducer responsible 
for handling actions and updating the data for a given slice.
*/
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.username = 'noble';
      state.email = 'elsherifsammy@gmail.com';
      state.password = 'password';
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
    },
    signup: (state) => {},
  },
});

export const { login, logout, signup } = loginSlice.actions;

export const selectUsername = (state) => state.user.username;
export const selectPassword = (state) => state.user.password;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */

export default loginSlice.reducer;
