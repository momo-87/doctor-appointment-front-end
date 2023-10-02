import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  doctors: [],
  isLoading: true,
  error: undefined,
  clickedDoctor: {},
  status: 'not started',
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
  reducers: {
    addClickedDoctor: (state, action) => {
      state.clickedDoctor = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMainPageDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainPageDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = [...action.payload.data];
        state.error = undefined;
        state.status = 'succeeded';
      })
      .addCase(getMainPageDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export const mainPageDoctors = (state) => state.mainPage;

export const { addClickedDoctor } = mainPageSlice.actions;

export default mainPageSlice.reducer;
