import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  doctors: [],
  error: null,
  status: 'not started',
};

export const fetchAllDoctors = createAsyncThunk('GET DOCTORS', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Doctors not found');
  }
});

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload;
      })
      .addCase(fetchAllDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const doctorsFetchStatus = (state) => state.doctor.status;
export const getDoctors = (state) => state.doctor.doctors;

export default doctorSlice.reducer;
