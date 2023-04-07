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
          imageUrl: '',
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
          imageUrl: '',
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

/* FOCALPOINTS */
export const addFocalPoint = createAsyncThunk(
  'focalpoint/addFocalPoint',
  async ({ title, description, sightToken }, { rejectWithValue }) => {
    try {
      console.log('check:', sightToken);
      const config = {
        headers: {
          authorization: `Bearer ${sightToken}`,
          'content-type': 'application/json',
        },
      };
      const res = await axios.post(
        `http://localhost:3000/user/${storedUser.username}/focalpoints`,
        { title: title, description: description },
        config
      );

      if (res.status === 201) {
        console.log('[200] Add Focal Point Successful');
        console.log('[Add-FocalPoint] res.data: ', res.data);
        return res.data;
      } else if (res.status === 400) {
        console.log('[400] Add Focal Point Failure');
        console.log('[Add-FocalPoint] res.data: ', res.data);
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteFocalPoint = createAsyncThunk(
  'focalpoint/deleteFocalPoint',
  async ({ focalpoint, sightToken }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/user/${storedUser.username}/focalpoints`,
        {
          headers: {
            authorization: `Bearer ${sightToken}`,
            'content-type': 'application/json',
          },
          data: {
            focalpoint: focalpoint,
          },
        }
      );

      if (res.status === 201) {
        console.log('[200] Delete Focal Point Successful');
        console.log('[Delete-FocalPoint] res.data: ', res.data);
        return res.data;
      } else if (res.status === 400) {
        console.log('[400] Delete Focal Point Failure');
        console.log('[Delete-FocalPoint] res.data: ', res.data);
        throw new Error(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

/* INSIGHTS */
export const editFPDetails = createAsyncThunk(
  'focalpoint/editFPDetails',
  async (
    { editedName, editedDescription, sightToken, focalpointId },
    { rejectWithValue }
  ) => {
    console.log('-------- SLICE -----------');
    try {
      const config = {
        headers: {
          authorization: `Bearer ${sightToken}`,
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.patch(
        `http://localhost:3000/user/${storedUser.username}/focalpoints`,
        {
          editedName: editedName,
          editedDescription: editedDescription,
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
          authorization: 'Bearer ' + sightToken,
        },
      };

      const res = await axios.post(
        `http://localhost:3000/user/${username}/focalpoints/${focalpointId}`,
        {
          insight: insight,
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
      const config = {
        headers: {
          authorization: `Bearer ${sightToken}`,
          'content-type': 'application/json',
        },
      };

      const res = await axios.delete(
        `http://localhost:3000/user/${username}/focalpoints/${focalpointId}`,
        {
          headers: {
            authorization: `Bearer ${sightToken}`,
            'content-type': 'application/json',
          },
          data: {
            insight: insight,
            focalpointId: focalpointId,
          },
        }
      );

      if (res.status === 201) {
        console.log('[200] Delete Insight Successful');
        console.log('[Delete-Insight] res.data: ', res.data);
        return res.data;
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

export const updateFocalpointImage = createAsyncThunk(
  'focalpoint/updateFocalpointImage',
  async ({ sightToken, formData, focalpointIndex }, { rejectWithValue }) => {
    try {
      console.log('---------SLICE--------');

      const config = {
        headers: {
          authorization: `Bearer ${sightToken}`,
          'content-type': 'multipart/form-data',
        },
      };

      const res = await axios.patch(
        `http://localhost:3000/user/${storedUser.username}/focalpoints/image`,
        formData,
        config
      );

      if (res.status === 201) {
        console.log('[200] Update Focal Point Image Successful');
        console.log('res.data: ', res.data);
        return { url: res.data, index: focalpointIndex };
      } else if (res.status === 400) {
        console.log('[400] Update Focal Point Image Failure');
        console.log('res.data: ', res.data);
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
            '[Delete-Insight] deleteInsight.fulfilled payload:',
            payload
          );
          //Change Redux State
          state.fp_array.find(
            (fp) => fp._id === payload.focalpointId
          ).insights = state.fp_array
            .find((fp) => fp._id === payload.focalpointId)
            .insights.filter((insight) => insight._id !== payload.insight._id);
          //Change localStorage
          const storedUser = JSON.parse(localStorage.getItem('user'));
          storedUser.focalpoints.find(
            (fp) => fp._id === payload.focalpointId
          ).insights = storedUser.focalpoints
            .find((fp) => fp._id === payload.focalpointId)
            .insights.filter((insight) => insight._id !== payload.insight._id);
          localStorage.setItem('user', JSON.stringify(storedUser));
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
      })
      .addCase(addFocalPoint.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFocalPoint.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.loading = false;
          state.error = 'Add focal point details failed';
        } else {
          console.log(
            '[Add-FocalPoint] addFocalPoint.fulfilled payload: ',
            payload
          );
          const storedUser = JSON.parse(localStorage.getItem('user'));
          storedUser.focalpoints.push(payload);
          localStorage.setItem('user', JSON.stringify(storedUser));
          state.fp_array.push(payload);
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(addFocalPoint.rejected, (state, { payload }) => {
        console.log(
          '[Add-FocalPoint] addFocalPoint.rejected payload: ',
          payload
        );
        alert('Add Focal Point failed. Please try again.');
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteFocalPoint.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFocalPoint.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.loading = false;
          state.error = 'Delete focal point details failed';
        } else {
          console.log(
            '[Delete-FocalPoint] deleteFocalPoint.fulfilled payload: ',
            payload
          );
          const storedUser = JSON.parse(localStorage.getItem('user'));
          const indexToDelete = storedUser.focalpoints.findIndex(
            (fp) => fp._id.toString() === payload._id.toString()
          ); // find the index of the fpDelete item in the array

          if (indexToDelete !== -1) {
            // check if the item was found
            storedUser.focalpoints.splice(indexToDelete, 1); // remove the item using the splice method
            console.log('Successfully removed', payload);
          } else {
            console.log('Not found in fp_array: ', payload);
          }

          localStorage.setItem('user', JSON.stringify(storedUser));
          state.fp_array.splice(indexToDelete, 1);
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(deleteFocalPoint.rejected, (state, { payload }) => {
        console.log(
          '[Delete-FocalPoint] deleteFocalPoint.rejected payload: ',
          payload
        );
        alert('Delete Focal Point failed. Please try again.');
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateFocalpointImage.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFocalpointImage.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          state.loading = false;
          state.error = 'Update Focal Point Image failed';
        } else {
          console.log(
            '[Update-FocalPoint-Image] updateFocalpointImage.fulfilled payload: ',
            payload
          );
          const storedUser = JSON.parse(localStorage.getItem('user'));
          storedUser.focalpoints[payload.index].imageUrl = payload.url;
          localStorage.setItem('user', JSON.stringify(storedUser));
          state.fp_array[payload.index].imageUrl = payload.url;
          state.loading = false;
          state.success = true;
        }
      })
      .addCase(updateFocalpointImage.rejected, (state, { payload }) => {
        console.log(
          '[Update-FocalPoint-Image] updateFocalpointImage.rejected payload: ',
          payload
        );
        alert('Update Focal Point Image failed. Please try again.');
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setQueue, setCatalog } = focalpointSlice.actions;

export default focalpointSlice.reducer;
