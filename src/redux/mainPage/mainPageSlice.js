import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  doctors: null,
  isLoading: true,
  error: undefined,
};

export const getMainPageDoctors = createAsyncThunk('mainPage/getMainPageDoctors', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors/main`);
    return response;
  } catch (error) {
    return rejectWithValue('Doctors not found');
  }
});

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMainPageDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainPageDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = action.payload.data;
      })
      .addCase(getMainPageDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const mainPageDoctors = (state) => state.mainPage;

export default mainPageSlice.reducer;
