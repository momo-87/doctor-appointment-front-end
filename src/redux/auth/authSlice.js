import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  user: null,
  status: 'not started',
  error: null,
};

export const authenticate = createAsyncThunk('AUTH', async (data) => {
  const response = await axios.post(`${BASE_URL}/users/new_session`, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    return response.data;
  }
  return { message: 'Error' };
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.status = 'not started';
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authenticate.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getUser = (state) => state.auth.user;
export const authStatus = (state) => state.auth.status;
export const authError = (state) => state.auth.error;

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
