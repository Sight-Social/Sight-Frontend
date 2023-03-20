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
          filters: [{}],
        },
      ],
      pinned_insights: [{}],
    };
  }
  let initialState = {};
  if (storedUser.focalpoints === []) {
    console.log('no focalpoints found initially');
    initialState = {
      fp_array: [
        {
          _id: '',
          title: 'Example Focalpoint',
          description:
            'You have not created a focal point yet, use this one as a template!',
          insights: [{ video_id: '', video_format: '', source: '', tags: {} }],
          filters: [{}],
        },
      ],
      pinned_insights: [{}],
    };
  } else {
    initialState = {
      fp_array: storedUser.focalpoints,
      pinned_insights: storedUser.pinned_insights,
    };
  }
  return initialState;
};

export const editFPDetails = createAsyncThunk(
  'focalpoint/editFPDetails',
  async (
    { editedName, editedDescription, sightToken, focalpointId },
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
          token: sightToken,
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

export const addInsight = createAsyncThunk(
  'focalpoint/addInsight',
  async (
    { username, focalpointId, insight, focalpointIndex, sightToken },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post(
        `http://localhost:3000/user/${username}/focalpoints/${focalpointId}`,
        {
          insight: insight,
          token: sightToken,
          focalpointId: focalpointId,
        },
        config
      );
      console.log('HEY: ', res);
      if (res.status === 201) {
        console.log('[200] Add Insight Successful');
        console.log(
          '[Add-Insight] res.data: ',
          res.data
        ); /* this is the insight */
        return { data: res.data, index: focalpointIndex };
      } else if (res.status === 400) {
        console.log('[400] Add Insight Point Failure');
        console.log('[Add-Insight] res.data: ', res.data);
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
    /* updateFocalPointCard: (state, action) => {
      state.fp_array = action.payload;
    }, */
    /* updateInsightList: (state, action) => {
      console.log('[UPDATE-INSIGHT] action.payload: ', action.payload);
      state.fp_array[action.payload.index].insights.push(action.payload.data);
    }, */
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
        } else {
          console.log('[EDIT-FP] editFPDetails.fulfilled payload: ', payload);
          const storedUser = JSON.parse(localStorage.getItem('user'));
          storedUser.focalpoints = payload;
          localStorage.setItem('user', JSON.stringify(storedUser));
          state.fp_array = payload;
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(editFPDetails.rejected, (state, { payload }) => {
        console.log('[EDIT-FP] editFPDetails.rejected payload: ', payload);
        alert('Edit failed. Please try again.');
        state.loading = false;
        state.error = payload;
      })
      .addCase(addInsight.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInsight.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.loading = false;
          state.error = 'Add insight details failed';
        } else {
          console.log('[Add-Insight] addInsight.fulfilled payload: ', payload);
          const storedUser = JSON.parse(localStorage.getItem('user'));
          storedUser.focalpoints[payload.index].insights.push(payload.data);
          localStorage.setItem('user', JSON.stringify(storedUser));
          state.fp_array[payload.index].insights.push(payload.data);
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(addInsight.rejected, (state, { payload }) => {
        console.log('[Add-Insight] addInsight.rejected payload: ', payload);
        alert('Add Insight failed. Please try again.');
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {
  /* updateFocalPointCard, updateInsightList */
} = focalpointSlice.actions;

export default focalpointSlice.reducer;
