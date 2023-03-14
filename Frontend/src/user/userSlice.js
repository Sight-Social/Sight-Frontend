import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    loading: false,
    error: null,
    username: '',
    email: '',
    password: '',
    googleId: '',
    avatar: '',
    focalpoints: [],
    pinned_insights: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log('[userSlice.js] setUser action.payload: ', action.payload);
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.googleId = action.payload.googleId;
            state.avatar = action.payload.avatar;
            state.focalpoints = action.payload.focalpoints;
            state.pinned_insights = action.payload.pinned_insights;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        clearUser: (state, action) => {
            console.log('[userSlice.js] clearUser called');
            state.isAuthenticated = false;
            state.username = '';
            state.email = '';
            state.password = '';
            state.googleId = '';
            state.avatar = '';
            state.focalpoints = [];
            state.pinned_insights = [];
            localStorage.clear();
        }
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

