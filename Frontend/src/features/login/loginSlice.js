import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* import { fetchCount } from './counterAPI'; */

/* LOGIN SLICE */
const initialState = {
  username: '',
  email: '',
  password: '',
};

/* WHAT IS A SLICE?
A slice is the portion of Redux code that relates to a specific set of data and 
actions within the store 's state. A slice reducer is the reducer responsible 
for handling actions and updating the data for a given slice.
*/
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  /* WHAT IS A REDUCER?
  Reducers are functions that take the current state and an action as arguments, 
  and return a new state result. In other words, (state, action) => newState.
  */
  reducers: {
    login: (state) => {
      /* state.value += 1; */
      console.log('[RDX] LOGGING IN!!!');
    },
    logout: (state) => {
      /* state.value -= 1; */
    },
    signup: (state) => {
      /* state.value += action.payload; */
    },
  },
});

export const { login, logout, signup } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */

export default loginSlice.reducer;
