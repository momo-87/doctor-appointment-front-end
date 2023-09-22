import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
    user: null,
    status: 'not started',
    error: null
};

export const authenticate = createAsyncThunk('AUTH', async (data) => {
    const response = await axios.post(`${BASE_URL}/users/new_session`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.status === 200) {
        const json = response.json();
        return json;
    } else {
        return { message: 'Error' };
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUser: (state) => state.user,
    },
    extraReducers(builder) {
        builder
            .addCase(authenticate.pending, (state, _) => {
                state.status = 'loading';
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
})

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
