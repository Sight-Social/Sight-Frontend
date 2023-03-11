import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  fp_array: [
    {
      _id: '',
      title: '',
      description: '',
      insights: [
        { video_id: '', video_format: '', video_source: '' },
        { video_id: '', video_format: '', video_source: '' },
      ],
    },
    {
      _id: '',
      title: '',
      description: '',
      insights: [
        { video_id: '', video_format: '', video_source: '' },
        { video_id: '', video_format: '', video_source: '' },
      ],
    },
  ],
};

export const focalpointSlice = createSlice({
  name: 'focalpoint',
  initialState,
  reducers: {
    addFocalpoint: (state) => {},
    removeFocalpoint: (state) => {},
    editFocalpoint: (state) => {},
  },
});

export const { addFocalpoint, removeFocalpoint, editFocalpoint } =
  focalpointSlice.actions;

export default focalpointSlice.reducer;
