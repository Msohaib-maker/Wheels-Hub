import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  showPhoneNumber: false,
};

const carSaleSlice = createSlice({
  name: 'carSale',
  initialState,
  reducers: {
    addCar(state, action) {
      state.cars.push(action.payload); // Add car details
    },
    togglePhoneNumber(state) {
      state.showPhoneNumber = !state.showPhoneNumber; // Toggle phone number visibility
    }
  }
});

export const { addCar, togglePhoneNumber } = carSaleSlice.actions;

export default carSaleSlice.reducer;
