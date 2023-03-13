import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './loginActions.js';
/* import { fetchCount } from './counterAPI'; */

/* LOGIN SLICE */
const initialState = {
  loading: false,
  error: null,
  success: false,
  username: '',
  email: '',
  password: '',
  googleId: '',
  accessToken: '',
  userToken: '',
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
    login: (state, action) => {
      console.log(action.payload.userData);
      const { username, email, password } = action.payload.userData;
      state.username = username;
      state.email = email;
      state.password = password;
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
    },
    signup: (state) => {},
  },
  extraReducers: {
    //Login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.username = payload.username
      state.email = payload.email
      state.password = payload.password
      state.googleId = payload.googleId
      state.accessToken = payload.accessToken
      state.userToken = payload.userToken
      state.avatar = payload.avatar
      state.success = true
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  }
});

export const { login, logout, signup } = loginSlice.actions;

export const selectUsername = (state) => state.profile.username;
export const selectPassword = (state) => state.profile.password;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */

export default loginSlice.reducer;
