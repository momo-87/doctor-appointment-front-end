import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllAppointments,
  createAppointment,
  getAppointments,
  appointmentStatus,
  appointmentError,
} from "../redux/appointment/appointmentSlice";

const MyAppointmentsPage = () => {
  const dispatch = useDispatch();

  const appointments = useSelector(getAppointments);
  const status = useSelector(appointmentStatus);
  const error = useSelector(appointmentError);

  useEffect(() => {
    if (status === "not started") {
      dispatch(fetchAllAppointments());
    }
  }, [dispatch]);

  return (
    <>
      {appointments.length > 0 && (
        <div>
          {appointments.map((appointment) => (
            <div>
              <div>{appointment.id}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyAppointmentsPage;
