import React from 'react';
import { useSelector } from 'react-redux';
import DeleteDoctor from '../components/DeleteDoctor';
import { getDoctors, doctorsFetchStatus } from '../redux/doctor/doctorSlice';
import Loading from '../components/Loading';

const DeleteDoctorList = () => {
  const doctors = useSelector(getDoctors);
  const status = useSelector(doctorsFetchStatus);

  return (
    <div className="w-full py-[20px] px-[10px] md-[20px] md:px-[40px] lg:px-[60px]">
      <h1 className="text-4xl text-center mt-[20px] mb-[20px]">
        Doctors&apos; List
      </h1>
      {status === 'loading' || status === 'not started' ? (
        <div className="flex items-center justify-center w-full">
          <Loading />
        </div>
      ) : (
        <div className="pb-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 ">
          {doctors.map((doctor) => (
            <DeleteDoctor key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteDoctorList;
