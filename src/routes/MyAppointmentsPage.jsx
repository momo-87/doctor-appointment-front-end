import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllAppointments,
  getAppointments,
  appointmentError,
  appointmentFetchStatus,
} from '../redux/appointment/appointmentSlice';

const MyAppointmentsPage = () => {
  const dispatch = useDispatch();

  const appointments = useSelector(getAppointments);
  const status = useSelector(appointmentFetchStatus);
  const error = useSelector(appointmentError);

  useEffect(() => {
    if (status === 'not started') {
      dispatch(fetchAllAppointments());
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl my-4">My Appointments</h1>
      <div className="relative overflow-x-auto border">
        {appointments.length > 0 && (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Hospital
                </th>
                <th scope="col" className="px-6 py-3">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {appointment.doctor}
                  </th>
                  <td className="px-6 py-4">{appointment.date}</td>
                  <td className="px-6 py-4">{appointment.hospital}</td>
                  <td className="px-6 py-4">
                    $
                    {appointment.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {appointments.length === 0 && <h2 className="">No Appointments</h2>}
      </div>
    </div>
  );
};

export default MyAppointmentsPage;
