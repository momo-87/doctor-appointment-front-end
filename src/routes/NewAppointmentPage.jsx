import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllDoctors } from "../redux/doctor/doctorSlice";
import { createAppointment } from "../redux/appointment/appointmentSlice";
import { getUser } from "../redux/auth/authSlice";
import { setToast } from "../redux/mainPage/mainPageSlice";

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
    dispatch(
      createAppointment({
        user_id: existingUser.id,
        doctor_id: selectedDoctor.id,
        appointment_date: selectedDate,
      })
    );
  };

  useEffect(() => {
    if (fetchStatus === "not started") {
      dispatch(fetchAllDoctors());
    } else if (doctors !== null && doctors.length > 0) {
      if (appointmentDoctor !== null) {
        setSelectedDoctor(appointmentDoctor);
      } else {
        setSelectedDoctor(doctors[0]);
      }
    }
  }, [doctors, fetchStatus]);

  useEffect(() => {
    if (
      error !== null &&
      (createStatus === "failed" || fetchStatus === "failed")
    ) {
      dispatch(setToast({ type: "error", message: error }));
      
    } else if (createStatus === "succeeded") {
      return navigate("/my-appointments");
    }

  }, [createStatus, fetchStatus, error]);

  return (
    <>
      {
        fetchStatus === "loading" ? (
          <div>Loading...</div>
        ) : (
          fetchStatus === "succeeded" &&
          doctors !== null &&
          doctors.length > 0 &&
          selectedDoctor && (
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1 className="text-4xl my-4">Book an appointment</h1>
              <div className="flex flex-row items-center">
                <div className="mx-2 select-doctor">
                  <select
                    className="rounded-full p-4 border-2 border-black"
                    onChange={(e) => {
                      const currentDoctor = doctors.find(
                        ({ id }) =>
                          parseInt(id, 10) === parseInt(e.target.value, 10)
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
                <div className="mx-2">
                  <input
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    type="date"
                    className="rounded-full p-4 border-2 border-black"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="mx-2">
                  <div className="rounded-full p-4 border-2 border-black bg-gray-300">
                    {selectedDoctor.hospital}
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
