import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import doctorReducer from './doctor/doctorSlice';
import appointmentReducer from './appointment/appointmentSlice';
import authReducer from './auth/authSlice';
import mainPageReducer from './mainPage/mainPageSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const mainPagePersistConfig = {
  key: 'mainPage',
  storage,
  whitelist: ['clickedDoctor'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
  mainPage: persistReducer(mainPagePersistConfig, mainPageReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
