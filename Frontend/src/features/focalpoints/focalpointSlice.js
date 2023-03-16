import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const storedUser = JSON.parse(localStorage.getItem('user'));

const setInitialState = () => {
  /* const storedUser = JSON.parse(localStorage.getItem('user')); */
  if (storedUser === null) {
    return {
      fp_array: [
        {
          _id: '',
          title: '',
          description: '',
          insights: [{ video_id: '', video_format: '', source: '', tags: {} }],
        },
      ],
    };
  }
  let initialState = {};
  if (storedUser.focalpoints === []) {
    console.log('no focalpoints found initially');
    initialState = {
      fp_array: [
        {
          _id: '',
          title: 'Example Focal Point',
          description:
            'Your account doesnt have any focal points created yet. Check this one out!',
          insights: [{ video_id: '', video_format: '', source: '', tags: {} }],
        },
      ],
    };
  } else {
    initialState = {
      fp_array: storedUser.focalpoints,
    };
  }
  return initialState;
};

export const editFPDetails = createAsyncThunk(
  'focalpoint/editFPDetails',
  async (
    { editedName, editedDescription, email, focalpointId },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.patch(
        `http://localhost:3000/user/${storedUser.username}/focalpoints`,
        {
          editedName: editedName,
          editedDescription: editedDescription,
          email: email,
          focalpointToEdit: focalpointId,
        },
        config
      );

      if (res.status === 200) {
        console.log('[200] Edit Focal Point Successful');
        console.log('[EDIT-FP] res.data: ', res.data);
        return res.data.focalpoints;
      } else if (res.status === 400) {
        console.log('[400] Edit Focal Point Failure');
        console.log('[EDIT-FP] res.data: ', res.data);
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const focalpointSlice = createSlice({
  name: 'focalpoint',
  initialState: setInitialState(),
  reducers: {
    updateFocalPointCard: (state, action) => {
      state.fp_array = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editFPDetails.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editFPDetails.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.loading = false;
          state.error = 'Edit fp details failed';
          state.isAuthenticated = false;
        } else {
          console.log('[EDIT-FP] editFPDetails.fulfilled payload: ', payload);
          state.loading = false;
          state.success = true;
          state.isAuthenticated = true;
        }
      })
      .addCase(editFPDetails.rejected, (state, { payload }) => {
        console.log('[EDIT-FP] editFPDetails.rejected payload: ', payload);
        alert('Edit failed. Please try again.');
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { updateFocalPointCard } = focalpointSlice.actions;

export default focalpointSlice.reducer;
