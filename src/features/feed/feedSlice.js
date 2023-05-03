import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//Initial State
const setInitialState = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  /* console.log('FeedSlice: ' + storedUser.subscriptions); */
  if (storedUser === null) {
    return {
      catalog: [],
      queue: [],
      queueIndex: 0,
      subscriptions: [],
      filters: [],
      numCards: 0,
    };
  }
  let initialState = {};
  if (storedUser.subscriptions === [] || storedUser.subscriptions === '') {
    console.log('no subscriptions found initially');
    initialState = {
      catalog: [],
      queue: [],
      queueIndex: 0,
      subscriptions: [],
      filters: {},
      numCards: 0,
    };
  } else {
    console.log('FeedSlice: ' + storedUser.subscriptions);
    initialState = {
      catalog: populateInitialCatalog(storedUser.subscriptions),
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
const populateInitialCatalog = (subscriptions) => {
  let catalog = [];
  for (let i = 0; i < subscriptions.length; i++) {
    for (let j = 3; j < subscriptions[i].insights.length; j++) {
      const insight = subscriptions[i].insights[j];
      catalog.push(insight);
    }
  }
  return catalog;
};

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
  async ({ catalog, queue, filters, numCardsToAdd }) => {
    const newCards = [...queue];
    //We need to filter out subscriptions, source, and media type that are in the state.feed.filters array
    let numCardsAdded = 0;

    //Add cards to the queue until we have added numCardsToAdd cards
    while (numCardsAdded < numCardsToAdd) {
      //Get the next insight from the catalog
      let randomCatalogIndex = Math.floor(Math.random() * catalog.length);
      const insight = catalog[randomCatalogIndex];

      //Check filters
      const isSubscriptionFiltered = filters.subscriptions.length > 0 && filters.subscriptions.some(subscription => subscription === insight.channelId);
      const isSourceFiltered = filters.source.length > 0 && filters.source.some(source => source === insight.source);
      const isMediaTypeFiltered = filters.mediaType.length > 0 && filters.mediaType.some(mediaType => mediaType === insight.mediaType);

      //If any of the filters match, skip this card
      if (isSubscriptionFiltered || isSourceFiltered || isMediaTypeFiltered) {
        continue;
      }
      else {
        // If none of the conditions match, add the element to newCards
        newCards.push({
          videoId: insight.videoId,
          _id: insight._id,
          channelId: insight.channelId,
          title: insight.title,
          description: insight.description,
          thumbnail: insight.thumbnail,
          source: insight.source,
          mediaType: insight.mediaType,
          tags: insight.tags,
        });
        numCardsAdded++;
    }
    }
    console.log('newCards: ', newCards);
    return newCards;
  }
);

export const modifyQueue = createAsyncThunk(
  'feed/modifyQueue',
  async ({ queue, filters }) => {
    console.log('modifyQueue initial queue:', queue);
    console.log('modifyQueue filters passed in:', filters);

    let newQueue = [];
    try {
      newQueue = queue.filter((card) => {
      console.log('modifyQueue card: ', card)

      const isSubscriptionFiltered = 
        filters.subscriptions.length > 0 && filters.subscriptions.some(subscription => subscription === card.channelId);
      const isSourceFiltered = 
        filters.source.length > 0 && filters.sources.some(source => source === card.source);
      const isMediaTypeFiltered = 
        filters.mediaType.length > 0 && filters.mediaType.some(mediaType => mediaType === card.mediaType);

      if (isSubscriptionFiltered || isSourceFiltered || isMediaTypeFiltered) {
        console.log('skipping video due to filter');
        return false;
      } else {
        return true;
      }
    });
  } catch (error) {
    console.log('modifyQueue error: ', error);
  }

    console.log('modifyQueue newQueue: ', newQueue)
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
      state.queue = action.payload;
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
