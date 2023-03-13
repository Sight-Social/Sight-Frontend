import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';
import focalpointReducer from '../features/focalpoints/focalpointSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: loginReducer,
    focalpoint: focalpointReducer,
    /* login: loginReducer, */
  },
});
