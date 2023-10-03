import React from 'react';
import { useSelector } from 'react-redux';
import DeleteDoctor from '../components/DeleteDoctor';
import { getDoctors } from '../redux/doctor/doctorSlice';

const DeleteDoctorList = () => {
  const doctors = useSelector(getDoctors);
  return (
    <div className=" py-[20px] px-[10px] md-[20px]  md:px-[40px] lg:px-[60px]">
      <h1 className="text-4xl my-4 text-center mt-[50px] mb-[20px]">
        Doctors List
      </h1>
      <div className="pb-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 ">
        {doctors !== null
          && doctors.map((doctor) => (
            <DeleteDoctor key={doctor.id} doctor={doctor} />
          ))}
      </div>
    </div>
  );
};

export default DeleteDoctorList;
