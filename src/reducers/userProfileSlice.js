// src/store/userProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: localStorage.getItem('person_name') || '',
  email: localStorage.getItem('person_email') || '',
  streetAddress: localStorage.getItem('address') || '',
  city: localStorage.getItem('City') || '',
  country: localStorage.getItem('Country') || '',
  postalCode: localStorage.getItem('zip_code') || '',
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateProfile(state, action) {
      const { fullName, email, streetAddress, city, country, postalCode } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.streetAddress = streetAddress;
      state.city = city;
      state.country = country;
      state.postalCode = postalCode;

      // Optionally, you can update localStorage if desired
      localStorage.setItem('person_name', fullName);
      localStorage.setItem('person_email', email);
      localStorage.setItem('address', streetAddress);
      localStorage.setItem('City', city);
      localStorage.setItem('Country', country);
      localStorage.setItem('zip_code', postalCode);
    },
  },
});

export const { updateProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
