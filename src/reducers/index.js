import { combineReducers } from '@reduxjs/toolkit';
import CarAccessoryReducer from './car_accessory_reducer';

const rootReducer = combineReducers({
    accessories: CarAccessoryReducer,
});

export default rootReducer;