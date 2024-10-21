// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phone: '',
    userInfo: null,
};

const InspectionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.phone = action.payload.phone;
            state.userInfo = action.payload.userInfo;
        },
        clearUser: (state) => {
            state.phone = '';
            state.userInfo = null;
        },
    },
});

export const { setUser, clearUser } = InspectionSlice.actions;
export default InspectionSlice.reducer;
