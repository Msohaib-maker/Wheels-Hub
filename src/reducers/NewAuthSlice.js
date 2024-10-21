// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null
};

const NewAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    }
});

export const { login, logout } = NewAuthSlice.actions;
export default NewAuthSlice.reducer;
