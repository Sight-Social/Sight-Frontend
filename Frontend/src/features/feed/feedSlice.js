import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Card from '../../components/Feed/FeedCard';

const populateInitialQueue = (subscriptions) => {
    let queue = [];
    for (let i = 0; i < 3; i++) {
        const insights = subscriptions[i].insights;
        queue.push({ insightId: insights[i]._id, videoId: insights[i].videoId });
    }
    return queue;
}

const setInitialState = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
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
    if (storedUser.subscriptions === [] || storedUser.subscriptions == ''){
        console.log('no subscriptions found initially')
        initialState = {
            queue: [],
            queueIndex: 0,
            subscriptions: [],
            filters: [],
            numCards: 0,
        };
    } 
    else {
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

export const loadMoreCards = createAsyncThunk(
    'feed/loadMoreCards',
    async ({ queue, subscriptions, numCardsToAdd }) => {
      console.log('loadMoreCards: ', queue, queue.length, subscriptions, numCardsToAdd)
      const newCards = [...queue];
      let numCardsAdded = 0;
      let subIndex = queue.length % subscriptions.length;
      let insightIndex = queue.length % subscriptions[subIndex].insights.length;
  
      //Add cards to the queue until we have added numCardsToAdd cards
      while (numCardsAdded < numCardsToAdd) {
        //Get the next subscription
        const subscription = subscriptions[subIndex];
        //Get the insights for the subscription
        const insights = subscription.insights;
        //Add an insight to the queue
        newCards.push({insightId: insights[insightIndex]._id, videoId: insights[insightIndex].videoId});
  
        // Update counters
        subIndex = (subIndex + 1) % subscriptions.length;
        insightIndex = (insightIndex + 1) % insights.length;
        numCardsAdded++;
      }
  
      return newCards;
    }
  );
  
  
  

const feedSlice = createSlice({
  name: 'feed',
  initialState: setInitialState(),
  reducers: {
    setFeedSubscriptions: (state, action) => {
        state.subscriptions = action.payload;
    },
    setFilters: (state, action) => {
        state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMoreCards.fulfilled, (state, action) => {
        state.loading = false;
        state.queue = action.payload;
      });
  },
});

export const { setFeedSubscriptions, setFilters } = feedSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
/* export const selectCount = (state) => state.counter.value; */


export default feedSlice.reducer;
