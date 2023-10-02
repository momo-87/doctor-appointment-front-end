import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
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
    return () => {};
  }, [dispatch]);

  if (error !== null) {
    return <div className="text-red-400">{error}</div>;
  }

  return (
    <div className="flex justify-center w-full new-appointment">
      <div className="flex flex-col z-10">
        <h1 className="text-2xl my-4 uppercase font-montreal-serial-bold tracking-[0.5em] text-center mx-2 text-black">
          My Appointments
        </h1>
        <hr className="mb-6 mt-2 w-2/5 self-center" />

        {status === 'loading' ? (
          <div>Loading...</div>
        ) : status === 'succeeded' && appointments.length > 0 ? (
          <div className="relative overflow-x-auto border mb-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="md:px-6 md:py-4 sm:px-3 sm:py-2">
                    Doctor
                  </th>
                  <th scope="col" className="md:px-6 md:py-4 sm:px-3 sm:py-2">
                    Date
                  </th>
                  <th scope="col" className="md:px-6 md:py-4 sm:px-3 sm:py-2">
                    Hospital
                  </th>
                  <th scope="col" className="md:px-6 md:py-4 sm:px-3 sm:py-2">
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
                      className="md:px-6 md:py-4 sm:px-3 sm:py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {appointment.doctor}
                    </th>
                    <td className="md:px-6 md:py-4 sm:px-3 sm:py-2">
                      {DateTime.fromISO(appointment.date, {
                        locale: 'en',
                      }).toFormat('MMMM dd, yyyy')}
                    </td>
                    <td className="md:px-6 md:py-4 sm:px-3 sm:py-2">{appointment.hospital}</td>
                    <td className="md:px-6 md:py-4 sm:px-3 sm:py-2">
                      $
                      {appointment.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          status === 'succeeded'
        && appointments.length === 0 && <h2 className="text-center">No Appointments</h2>
        )}
      </div>
    </div>
  );
};

export default MyAppointmentsPage;
