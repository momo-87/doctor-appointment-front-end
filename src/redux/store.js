import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import doctorReducer from './doctor/doctorSlice';
import mainPageReducer from './mainPage/mainPageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctor: doctorReducer,
    mainPage: mainPageReducer,
  },
});
