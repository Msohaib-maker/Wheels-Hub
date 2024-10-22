import { combineReducers } from '@reduxjs/toolkit';
import CarAccessoryReducer from './car_accessory_reducer';
import authReducer from './authSlice';
import carSaleReducer from './carsaleSlice';
import carListReducer from './carListSlice';
import UploadCarReducer from './UploadCarSlice';
import UsedCarReducer from './UsedCarSlice';
import InspectionReducer from './InspectionSlice';
import ReviewReducer from './reviewSlice'
import SignUpReducer from './signupSlice'

const rootReducer = combineReducers({
    accessories: CarAccessoryReducer,
    auth:authReducer,
    carSale:carSaleReducer,
    carList:carListReducer,
    uploadCar: UploadCarReducer,
    UsedCar: UsedCarReducer,
    InspectReducer: InspectionReducer,
    reviewReducer: ReviewReducer,
    RegisterReducer: SignUpReducer
});

export default rootReducer;