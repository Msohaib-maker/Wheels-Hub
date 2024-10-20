// src/reducers/carListSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue } from "firebase/database";

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async () => {
    const db = getDatabase();
    const CarListRef = ref(db, 'cars/');

    return new Promise((resolve, reject) => {
      onValue(CarListRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          resolve(Object.values(data));
        } else {
          reject('No data available');
        }
      });
    });
  }
);

const carListSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carsList = action.payload; // Update the state with fetched cars
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default carListSlice.reducer;
