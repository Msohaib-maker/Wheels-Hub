// src/redux/carSlice.js
import { createSlice } from '@reduxjs/toolkit';

const UsedCarSlice = createSlice({
  name: 'cars',
  initialState: {
    CarsList: []
  },
  reducers: {
    setCars: (state, action) => {
      state.CarsList = action.payload;
    }
  }
});

export const { setCars } = UsedCarSlice.actions;
export default UsedCarSlice.reducer;
