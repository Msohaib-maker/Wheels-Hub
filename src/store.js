import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';  // You'll need to create reducers to manage your state

const store = configureStore({
    reducer: rootReducer, // Pass your combined reducers here
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});



export default store;
