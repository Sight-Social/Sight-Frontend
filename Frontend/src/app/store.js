import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/userSlice';
import loginReducer from '../features/login/loginSlice';
import focalpointReducer from '../features/focalpoints/focalpointSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    focalpoint: focalpointReducer,
  },
});
