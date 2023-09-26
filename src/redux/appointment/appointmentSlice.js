import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
    appointments: [],
    status: 'not started',
    error: null,
};

export const createAppointment = createAsyncThunk('CREATE APPOINTMENT', async (data) => {
    const response = await axios.post(`${BASE_URL}/appointments`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        return response.data;
    }
    return { message: 'Error' };
});

export const fetchAllAppointments = createAsyncThunk('FETCH APPOINTMENTS', async (_, { getState }) => {
        
    const response = await axios.post(`${BASE_URL}/appointments/find_all`, JSON.stringify({
        user_id: getState().auth.user.id
    }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        return response.data;
    }
    return { message: 'Error' };
});

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(createAppointment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAppointment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.appointments.push(action.payload);
            })
            .addCase(createAppointment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAllAppointments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllAppointments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.appointments = action.payload;
            })
            .addCase(fetchAllAppointments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            ;
    },
});

export const getAppointments = (state) => state.appointment.appointments;
export const appointmentStatus = (state) => state.appointment.status;
export const appointmentError = (state) => state.appointment.error;

export default appointmentSlice.reducer;
