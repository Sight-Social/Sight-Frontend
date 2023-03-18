import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Card from '../../components/Feed/FeedCard';

//Initial State
const setInitialState = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  /* console.log('FeedSlice: ' + storedUser.subscriptions); */
  if (storedUser === null) {
    return {
      queue: [],
      queueIndex: 0,
      subscriptions: [],
      filters: [],
      numCards: 0,
    };
  }
  let initialState = {};
  if (storedUser.subscriptions === [] || storedUser.subscriptions == '') {
    console.log('no subscriptions found initially');
    initialState = {
      queue: [],
      queueIndex: 0,
      subscriptions: [],
      filters: {},
      numCards: 0,
    };
  } else {
    console.log('FeedSlice: ' + storedUser.subscriptions);
    initialState = {
      queue: populateInitialQueue(storedUser.subscriptions),
      queueIndex: 0,
      subscriptions: storedUser.subscriptions,
      filters: storedUser.filters,
      numCards: 0,
    };
  }
  return initialState;
};

//Extra Reducers
const populateInitialQueue = (subscriptions) => {
  let queue = [];
  for (let i = 0; i < 3; i++) {
    const insights = subscriptions[i].insights;
    queue.push(insights[i]);
  }
  return queue;
};
export const loadMoreCards = createAsyncThunk(
  'feed/loadMoreCards',
  async ({ queue, filters, subscriptions, numCardsToAdd }) => {
    console.log(
      'loadMoreCards: ',
      queue,
      queue.length,
      subscriptions,
      numCardsToAdd
    );
    const newCards = [...queue];
    //We need to filter out subscriptions, source, and media type that are in the state.feed.filters array
    let numCardsAdded = 0;
    let subIndex = queue.length % subscriptions.length;
    let insightIndex = queue.length % subscriptions[subIndex].insights.length;

    //Add cards to the queue until we have added numCardsToAdd cards
    while (numCardsAdded < numCardsToAdd) {
      //Get the next subscription
      const subscription = subscriptions[subIndex];
      const channelId = subscription.channelId;
      //Get the insights for the subscription
      const insights = subscription.insights;
      //Check filters
      for (let i = 0; i < filters.subscriptions.length; i++) {
        for (let j = 0; j < filters.sources.length; j++) {
          for (let k = 0; k < filters.mediaType.length; k++) {
            if (
              filters.subscriptions[i].id === subscription._id ||
              filters.sources[j].id === insights[insightIndex].source ||
              filters.mediaType[k].id === insights[insightIndex].mediaType
            ) {
              console.log(
                'skipping video due to filter: ',
                insights[insightIndex]._id
              );
              subIndex = (subIndex + 1) % filters.subscriptions.length;
              insightIndex = (insightIndex + 1) % insights.length;
              continue;
            }
          }
        }
      }
      // If none of the conditions match, add the element to newCards
      console.log('adding video: ', insights[insightIndex]._id);
      newCards.push({
        insightId: insights[insightIndex]._id,
        channelId: channelId,
        videoId: insights[insightIndex].videoId,
        title: insights[insightIndex].title,
        description: insights[insightIndex].description,
        thumbnail: insights[insightIndex].thumbnail,
        source: insights[insightIndex].source,
        mediaType: insights[insightIndex].mediaType,
        tags: insights[insightIndex].tags,
      });
      // Update counters
      subIndex = (subIndex + 1) % subscriptions.length;
      insightIndex = (insightIndex + 1) % insights.length;
      numCardsAdded++;
    }

    return newCards;
  }
);

export const modifyQueue = createAsyncThunk(
  'feed/modifyQueue',
  async ({ queue, filters }) => {
    console.log('modifyQueue queue:', queue);
    console.log('modifyQueue filters:', filters);
    const oldQueue = [...queue];
    //We need to filter out subscriptions, source, and media type (state.feed.filters / filters) that are in state.feed.queue
    let newQueue = [];
    newQueue = oldQueue.filter((card) => {
      for (let i = 0; i < filters.subscriptions.length; i++) {
        for (let j = 0; j < filters.sources.length; j++) {
          for (let k = 0; k < filters.mediaType.length; k++) {
            if (
              filters.subscriptions[i].id === card.subscriptionId ||
              filters.sources[j].id === card.source ||
              filters.mediaType[k].id === card.mediaType
            ) {
              console.log('skipping video due to filter');
            }
          }
        }
      }
    });
    return newQueue;
  }
);

/*********************************/
//Slice
const feedSlice = createSlice({
  name: 'feed',
  initialState: setInitialState(),
  reducers: {
    setFeedSubscriptions: (state, action) => {
      state.subscriptions = action.payload;
    },
    setFilters: (state, action) => {
      console.log('setFilters action.payload: ', action.payload);
      state.filters = action.payload;
    },
    setQueue: (state, action) => {
      console.log('setQueue action.payload: ', action.payload);
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadMoreCards.pending, (state) => {
          state.loading = true;
        })
        .addCase(loadMoreCards.fulfilled, (state, action) => {
          state.loading = false;
          state.queue = action.payload;
        })
        .addCase(loadMoreCards.rejected, (state) => {
          state.loading = false;
          console.log('loadMoreCards rejected');
        })
        .addCase(modifyQueue.pending, (state) => {
          state.loading = true;
        })
        .addCase(modifyQueue.fulfilled, (state, action) => {
          state.loading = false;
          state.queue = action.payload;
        })
        .addCase(modifyQueue.rejected, (state) => {
          state.loading = false;
          console.log('modifyQueue rejected');
        });
    },
  },
});

export const { setFeedSubscriptions, setFilters, setQueue } = feedSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */

export default feedSlice.reducer;
