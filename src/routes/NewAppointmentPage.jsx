import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAllDoctors } from '../redux/doctor/doctorSlice';
import {
  createAppointment,
  resetStatus,
} from '../redux/appointment/appointmentSlice';
import { getUser } from '../redux/auth/authSlice';

const NewAppointmentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    doctors,
    status: fetchStatus,
    appointmentDoctor,
  } = useSelector((state) => state.doctor);
  const { createStatus, error } = useSelector((state) => state.appointment);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const existingUser = useSelector(getUser);

  const handleSubmit = () => {
    if (selectedDate !== null) {
      dispatch(
        createAppointment({
          user_id: existingUser.id,
          doctor_id: selectedDoctor.id,
          appointment_date: selectedDate,
        }),
      );
    } else {
      toast.error('Please select a date', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (fetchStatus === 'not started') {
      dispatch(fetchAllDoctors());
    } else if (doctors !== null && doctors.length > 0) {
      if (appointmentDoctor !== null) {
        setSelectedDoctor(appointmentDoctor);
      } else {
        setSelectedDoctor(doctors[0]);
      }
    }

    return () => {
      dispatch(resetStatus());
    };
  }, [doctors, fetchStatus]);

  useEffect(() => {
    if (
      error !== null
      && (createStatus === 'failed' || fetchStatus === 'failed')
    ) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else if (createStatus === 'succeeded') {
      dispatch(resetStatus());
      toast.success('Appointment successfully set', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return navigate('/my-appointments');
    }

    return () => {};
  }, [createStatus, fetchStatus, error]);

  return (
    <>
      {
        fetchStatus === 'loading' ? (
          <div>Loading...</div>
        ) : (
          selectedDoctor !== null && (
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1 className="text-4xl my-4">Book an appointment</h1>
              <div className="flex flex-col md:flex-row items-center">
                <div className="mx-2 w-50 border-2 border-black py-2 px-4 rounded-full my-2">
                  <div className="text-sm text-gray-600">Doctor</div>
                  <select
                    className="p-0 m-0 active:border-none active:outline-none"
                    onChange={(e) => {
                      const currentDoctor = doctors.find(
                        ({ id }) => parseInt(id, 10) === parseInt(e.target.value, 10),
                      );
                      setSelectedDoctor(currentDoctor);
                    }}
                    value={selectedDoctor.id}
                  >
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mx-2 w-42 rounded-full px-4 py-2 border-2 border-black  my-2">
                  <div className="text-sm text-gray-600">Date</div>
                  <input
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    type="date"
                    className="m-0 p-0"
                    placeholder="Date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="mx-2 w-48 my-2">
                  <div className="rounded-full px-4 py-2 border-2 border-black bg-gray-300">
                    <div className="text-gray-600 text-sm">Hospital</div>
                    <div className="text-black text-base">
                      {selectedDoctor.hospital}
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <button
                    type="submit"
                    className="rounded-full p-4 border-2 border-color-green bg-color-green text-white"
                    onClick={() => handleSubmit()}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )
        )
        // : (
        //   <div>An error has occured</div>
        // )
      }
    </>
  );
};

export default NewAppointmentPage;
