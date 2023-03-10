import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
/* import loginReducer from '../features/login/loginSlice'; */
import loginReducer from '../reducers/loginReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: loginReducer,
    /* login: loginReducer, */
  },
});
