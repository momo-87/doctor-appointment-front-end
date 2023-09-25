import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import doctorReducer from './doctor/doctorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctor: doctorReducer,
  },
});
