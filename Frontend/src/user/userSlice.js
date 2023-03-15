import { createSlice } from '@reduxjs/toolkit';
import { updateUsername, addInsightToFocalPoint } from './userThunk';

const initialState = {
    isAuthenticated: false,
    loading: false,
    error: null,
    username: '',
    email: '',
    password: '',
    avatar: '',
    tokens: [],
    subscriptions: [],
    focalpoints: [],
    pinnedInsights: [],
    filters: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log('[userSlice.js] setUser action.payload: ', action.payload);
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
            state.tokens = action.payload.tokens;
            state.isAuthenticated = true;
            state.subscriptions = action.payload.subscriptions;
            state.focalpoints = action.payload.focalpoints;
            state.pinnedInsights = action.payload.pinnedInsights;
            state.filters = action.payload.filters;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        clearUser: (state, action) => {
            console.log('[userSlice.js] clearUser called');
            state.username = '';
            state.email = '';
            state.avatar = '';
            state.tokens = [];
            state.isAuthenticated = false;
            state.subscriptions = [];
            state.focalpoints = [];
            state.pinnedInsights = [];
            state.filters = [];
            localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUsername.fulfilled, (state, action) => {
                console.log('[userSlice.js] updateUsername.fulfilled called');
                console.log('[userSlice.js] action.payload: ', action.payload);
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.avatar = action.payload.avatar;
                state.tokens = action.payload.tokens;
                state.isAuthenticated = true;
                state.subscriptions = action.payload.subscriptions;
                state.focalpoints = action.payload.focalpoints;
                state.pinnedInsights = action.payload.pinnedInsights;
                state.filters = action.payload.filters;
                state.feed.filters = action.payload.filters;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(updateUsername.rejected, (state, action) => {
                console.log('[userSlice.js] updateUsername.rejected called');
                state.error = action.payload;
            })
            .addCase(addInsightToFocalPoint.fulfilled, (state, action) => {
                console.log('[userSlice.js] addInsightToFocalPoint.fulfilled called');
                console.log('[userSlice.js] action.payload: ', action.payload);
                for (let i = 0; i < state.focalpoints.length; i++) {
                    if (state.focalpoints[i]._id === action.payload.focalpointId) {
                        console.log('found the focalpoint in state')
                        state.focalpoints[i].insights.push(action.payload.insight)

                        // Update localStorage
                        let user = JSON.parse(localStorage.getItem('user'));
                        user.focalpoints[i].insights.push(action.payload.insight);
                        localStorage.setItem('user', JSON.stringify(user));
                    }
                }
            })
            .addCase(addInsightToFocalPoint.rejected, (state, action) => {
                console.log('[userSlice.js] addInsightToFocalPoint.rejected called');
                state.error = action.payload;
            });
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

