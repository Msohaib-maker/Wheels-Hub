import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../Firebase/firebase';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';

// Thunk for fetching car data from Firebase
export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const db = getDatabase();
  const dbRef = ref(db);
  
  const snapshot = await get(child(dbRef, 'cars/'));
  const data = snapshot.val();

  if (data) {
    return Object.values(data); // Return an array of cars
  } else {
    throw new Error('No car data found');
  }
});

// Thunk for uploading car data to Firebase
export const uploadCar = createAsyncThunk('cars/uploadCar', async (carData, thunkAPI) => {
  const db = getDatabase();
  const imageRef = storageRef(storage, `images/${carData.file.file_remote.name}`);

  // Upload image to Firebase Storage
  const snapshot = await uploadBytes(imageRef, carData.file.file_remote);
  const downloadURL = await getDownloadURL(snapshot.ref);

  const carDataWithImage = {
    ...carData,
    file: {
      ...carData.file,
      file_remote: downloadURL, // Store download URL of the image
    },
  };

  // Save the combined data to Firebase Realtime Database
  await set(ref(db, 'cars/' + uuidv4()), carDataWithImage);
  return carDataWithImage;
});

// Initial state
const initialState = {
  carsList: [],
  status: 'idle',
  error: null,
};

// Create slice
const UploadcarSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    // Additional reducers (if needed)
  },
  extraReducers: (builder) => {
    builder
      // For fetchCars
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carsList = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // For uploadCar
      .addCase(uploadCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(uploadCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carsList.push(action.payload); // Append newly uploaded car
      })
      .addCase(uploadCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default UploadcarSlice.reducer;
