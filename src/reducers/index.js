import { combineReducers } from '@reduxjs/toolkit';
import CarAccessoryReducer from './car_accessory_reducer';
import authReducer from './authSlice'

const rootReducer = combineReducers({
    accessories: CarAccessoryReducer,
    auth:authReducer
});

export default rootReducer;