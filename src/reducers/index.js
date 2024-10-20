import { combineReducers } from '@reduxjs/toolkit';
import CarAccessoryReducer from './car_accessory_reducer';
import authReducer from './authSlice';
import carSaleReducer from './carsaleSlice';
import carListReducer from './carListSlice';
import UploadCarReducer from './UploadCarSlice'

const rootReducer = combineReducers({
    accessories: CarAccessoryReducer,
    auth:authReducer,
    carSale:carSaleReducer,
    carList:carListReducer,
    uploadCar: UploadCarReducer
});

export default rootReducer;