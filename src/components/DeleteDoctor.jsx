import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeDoctor, deleteDoctorById } from '../redux/doctor/doctorSlice';

const DeleteDoctor = ({ doctor }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeDoctor(doctor.id));
    dispatch(deleteDoctorById(doctor.id));
  };

  return (
    <div>
      <div className="w-[70%] rounded-full mx-auto bg-color-aliceblue">
        <img src={`data:image/png;base64,${doctor.image}`} alt="Doctor" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black text-center text-black">
          {doctor.name}
        </h1>
        <div className="text-center">
          <button
            className="hover:bg-white hover:text-color-green border-[2px] border-color-gray width-[100px] bg-color-green mt-[0px] px-[30px] py-[15x] rounded-2xl "
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteDoctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteDoctor;
