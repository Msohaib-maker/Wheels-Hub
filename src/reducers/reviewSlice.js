// src/store/reviewsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action) {
      state.reviews = action.payload;
    },
    addReview(state, action) {
      state.reviews.push(action.payload);
    },
  },
});

export const { setReviews, addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
