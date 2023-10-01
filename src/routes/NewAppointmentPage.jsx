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
    if (selectedDate !== null && selectedDoctor !== null) {
      dispatch(
        createAppointment({
          user_id: existingUser.id,
          doctor_id: selectedDoctor.id,
          appointment_date: selectedDate,
        }),
      );
    }
  };

  useEffect(() => {
    if (fetchStatus === 'not started') {
      dispatch(fetchAllDoctors());
    } else if (
      doctors !== null
      && doctors.length > 0
      && appointmentDoctor !== null
    ) {
      setSelectedDoctor(appointmentDoctor);
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
          doctors !== null
          && doctors.length > 0 && (
            <div className="flex mx-auto book-appointment text-white">
              <div className="flex flex-col items-center justify-center z-10">
                <h1 className="text-2xl my-4 uppercase font-montreal-serial-bold tracking-[0.5em] text-center mx-2">
                  Book an appointment
                </h1>
                <hr className="mb-6 mt-2 w-2/5" />
                <div className="tracking-widest w-1/2 mb-6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero eius quia quisquam modi sapiente minima eaque facilis
                  hic maiores nemo magnam repudiandae adipisci consectetur sint
                  distinctio mollitia velit, provident soluta.
                </div>
                <div className="flex flex-col md:flex-row items-center flex-wrap justify-center">
                  <div className="m-2 custom-select">
                    <select
                      className="m-0 py-2 pl-4 pr-10 border rounded-full text-black"
                      onChange={(e) => {
                        const currentDoctor = doctors.find(
                          ({ id }) => parseInt(id, 10) === parseInt(e.target.value, 10),
                        );
                        setSelectedDoctor(currentDoctor);
                      }}
                    >
                      <option
                        value=""
                        disabled
                        selected={selectedDoctor === null}
                      >
                        Select a doctor
                      </option>
                      {doctors.map((doctor) => (
                        <option
                          key={doctor.id}
                          value={doctor.id}
                          selected={
                            !!(selectedDoctor !== null
                            && selectedDoctor.id === doctor.id)
                          }
                        >
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="m-2">
                    <input
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      type="date"
                      className="m-0 px-4 py-2 border rounded-full  text-black"
                      placeholder="Date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="m-2">
                    <div className="rounded-full px-4 py-2 border  flex flex-row justify-between items-center bg-white text-black">
                      <div className="text-black text-base">
                        {selectedDoctor !== null ? (
                          selectedDoctor.hospital
                        ) : (
                          <span className="text-gray-500">Hospital</span>
                        )}
                      </div>
                      <i className="fa-solid fa-location-dot pl-2" />
                      <span />
                    </div>
                  </div>
                  <div className="m-2">
                    <button
                      type="submit"
                      className="rounded-full px-4 py-2 border-2 border-white bg-color-green text-white
                    focus:outline-none hover:bg-white hover:text-color-green transition duration-300 ease-in-out font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleSubmit()}
                      disabled={createStatus === 'loading' || selectedDoctor === null || selectedDate === null}
                    >
                      Book Now
                    </button>
                  </div>
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
