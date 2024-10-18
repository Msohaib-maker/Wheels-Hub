import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue } from "firebase/database";

// Thunk for fetching accessories from Firebase
export const fetchAccessories = createAsyncThunk(
  'accessories/fetchAccessories',
  async (_, thunkAPI) => {
    const db = getDatabase();
    const CarAccessoryRef = ref(db, 'accessory/');

    return new Promise((resolve, reject) => {
      onValue(CarAccessoryRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          resolve(Object.values(data));
        } else {
          reject('No data found');
        }
      });
    });
  }
);

const car_accessory_reducer = createSlice({
  name: 'accessories',
  initialState: {
    accessoriesList: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null
  },
  reducers: {
    // Optional: If you want other synchronous actions here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessoriesList = action.payload;
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default car_accessory_reducer.reducer;
