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
          queue: [{}],
          catalog: [{}],
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
          queue: [{}],
          catalog: [{}],
        },
      ],
      pinned_insights: [{}],
    };
  } else {
    let newFpArray = storedUser.focalpoints.map((fp) => {
      fp.queue = [...fp.insights];
      return fp;
    });
    initialState = {
      fp_array: newFpArray,
      pinned_insights: storedUser.pinned_insights,
    };
  }
  return initialState;
};

export const loadMoreCards = createAsyncThunk(
  'focalpoint/loadMoreCards',
  async ({ queue, filters, catalog, numCardsToAdd }, { rejectWithValue }) => {
    const newCards = [...queue];
    //We need to filter out subscriptions, source, and media type that are in the state.feed.filters array
    let numCardsAdded = 0;

    //Add cards to the queue until we have added numCardsToAdd cards
    while (numCardsAdded < numCardsToAdd) {
      //Get the next subscription
      let randomCatalogIndex = Math.floor(Math.random() * catalog.length);
      const newVideo = catalog[randomCatalogIndex];
      //Check if the video is already in the queue
      let videoAlreadyInQueue = false;
      for (let i = 0; i < newCards.length; i++) {
        if (newCards[i].videoId === newVideo.videoId) {
          videoAlreadyInQueue = true;
          break;
        }
      }
      //If the video is already in the queue, we don't want to add it again
      if (videoAlreadyInQueue) {
        continue;
      }
      //If the video is not in the queue, we want to add it
      newCards.push(newVideo);
      numCardsAdded++;
    }
    console.log('newCards: ', newCards);
    return newCards;
  }
);

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
export const deleteInsight = createAsyncThunk(
  'focalpoint/deleteInsight',
  async (
    { username, focalpointId, insight, focalpointIndex, sightToken },
    { rejectWithValue }
  ) => {
    try {
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE4OWZjYjU2Y2RkNDgzODBiN2I2MjQiLCJpYXQiOjE2Nzk0MzE3NjV9.4ITd-dum9q--hR5u2vY6wS4MaJxHbIvPQwV-XaRw2XU
      console.log('st: ', sightToken)
      const config = {
        headers: {
          'authorization': `Bearer ${sightToken}`,
          'content-type': 'application/json',
        },
      };
      console.log('HEADERS:', config)

      console.log('delInsightSliceIN: ', insight);
      console.log('delInsightSliceFP: ', focalpointId);
      //http://localhost:3000/user/noble/focalpoints/64189fcb56cdd48380b7b625
      
      const res = await axios.delete(
        `http://localhost:3000/user/${username}/focalpoints/${focalpointId}`,
        {
          headers: {
            'authorization': `Bearer ${sightToken}`,
            'content-type': 'application/json',
          },
          data:{
            insight: insight,
            focalpointId: focalpointId
          }  
        },
        // {
          // data:{
          //   insight: insight,
          //   focalpointId: focalpointId
          // }
        // },
      );

      if (res.status === 201) {
        console.log('[200] Delete Insight Successful');
        console.log('[Delete-Insight] res.data: ', res.data);
        return { insight: res.data, index: focalpointIndex };
      } else if (res.status === 400) {
        console.log('[400] Delete Insight Failure');
        console.log('[Delete-Insight] res.data: ', res.data);
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//****SLICE*************************************** */
export const focalpointSlice = createSlice({
  name: 'focalpoint',
  initialState: setInitialState(),
  reducers: {
    setCatalog: (state, action) => {
      console.log('[SET-CATALOG] action.payload: ', action.payload);
      state.fp_array[action.payload.focalpointIndex].catalog = [
        ...action.payload.catalog,
      ];
    },
    setQueue: (state, action) => {
      console.log('[SET-QUEUE] action.payload: ', action.payload);
      console.log(
        '[SET-QUEUE] action.payload.focalpointIndex: ',
        action.payload.focalpointIndex
      );
      console.log('[SET-QUEUE] action.payload.queue: ', action.payload.queue);
      state.fp_array[action.payload.focalpointIndex].queue = [
        ...action.payload.queue,
      ];
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
      })
      .addCase(deleteInsight.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteInsight.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.loading = false;
          state.error = 'Delete insight details failed';
        } else {
          console.log(
            '[Delete-Insight] deleteInsight.fulfilled paylod:',
            payload
          );
          const storedUser = JSON.parse(localStorage.getItem('user'));
          storedUser.focalpoints[payload.index].insights.splice(
            payload.insight,
            1
          );
          localStorage.setItem('user', JSON.stringify(storedUser));
          state.fp_array[payload.index].insights.splice(payload.insight, 1);
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(deleteInsight.rejected, (state, { payload }) => {
        console.log(
          '[Delete-Insight] deleteInsight.rejected payload: ',
          payload
        );
        alert('Delete Insight failed. Please try again.');
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setQueue, setCatalog } = focalpointSlice.actions;

export default focalpointSlice.reducer;
