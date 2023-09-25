import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  doctor: null,
  isLoading: true,
  error: undefined,
};

export const getDoctor = createAsyncThunk('doctor/getdoctor', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors/26`);
    return response;
  } catch (error) {
    return rejectWithValue('Yeeeeeeeeee!');
  }
});

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctor = action.payload.data;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const doctorData = (state) => state.doctor;

export default doctorSlice.reducer;
