import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Async thunk to handle signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    const { email, password, fullName, streetAddress, city, country, postalCode } = userData;
    const db = getDatabase();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(db, 'users/' + user.uid), {
        City: city,
        Country: country,
        address: streetAddress,
        person_email: email,
        person_name: fullName,
        zip_code: postalCode
      });
      // Return the user data to update the state
      return { email, fullName, city, country, streetAddress, postalCode, uid: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null
  },
  reducers: {
    // You can add other synchronous actions here
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null; // clear any previous errors
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Set the error message
      });
  }
});

export default signupSlice.reducer;
