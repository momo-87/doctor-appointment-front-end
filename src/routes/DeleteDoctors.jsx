import React from 'react';
import DeleteDoctor from '../components/DeleteDoctor';

const doctors = [
  { id: 1, name: 'tom', image: '/doctor2.jpg' },
  { id: 2, name: 'tom', image: '/doctor2.jpg' },
  { id: 3, name: 'tom', image: '/doctor2.jpg' },
  { id: 4, name: 'tom', image: '/doctor2.jpg' },
  { id: 5, name: 'tom', image: '/doctor2.jpg' },
  { id: 6, name: 'tom', image: '/doctor2.jpg' },
];

function DeleteDoctorList() {
  return (
    <div className=" pt-[20px] px-[10px] md-[20px]  md:px-[20px]">
      <h1 className="text-center mb-6 text-[20px] font-bold mt-[40px]">
        Doctors List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 ">
        {doctors.map((doctor) => (
          <DeleteDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DeleteDoctorList;
