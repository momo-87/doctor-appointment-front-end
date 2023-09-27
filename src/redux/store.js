import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import mainPageReducer from './mainPage/mainPageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mainPage: mainPageReducer,
  },
});
