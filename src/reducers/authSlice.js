// src/reducers/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase';
import { getDatabase, ref, onValue } from "firebase/database";

// Thunk to handle login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, thunkAPI) => {
    try {
      // Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;

      // Fetch user data from Firebase Realtime Database
      const db = getDatabase();
      const starCountRef = ref(db, 'users/' + user.uid);
      
      return new Promise((resolve, reject) => {
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Cache data locally
            localStorage.setItem('City', data['City']);
            localStorage.setItem('Country', data['Country']);
            localStorage.setItem('address', data['address']);
            localStorage.setItem('person_email', data['person_email']);
            localStorage.setItem('person_name', data['person_name']);
            localStorage.setItem('zip_code', data['zip_code']);
            resolve(data); // Resolve with the fetched data
          } else {
            reject('No data found');
          }
        });
      });
      
    } catch (error) {
      // Return error message if login fails
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // User data after login
    status: 'idle', // idle, loading, succeeded, failed
    error: null,  // Error message if any
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.clear(); // Clear local storage on logout
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'; // Set status to loading during login
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded
        state.user = action.payload; // Set user data from Firebase
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed if login fails
        state.error = action.payload; // Capture error message
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
