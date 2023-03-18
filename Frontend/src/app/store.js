import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice';
import loginReducer from '../features/login/loginSlice';
import feedReducer from '../features/feed/feedSlice';
import focalpointReducer from '../features/focalpoints/focalpointSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer /* only data related to the user profile */,
    login: loginReducer,
    feed: feedReducer,
    focalpoint: focalpointReducer,
  },
});
