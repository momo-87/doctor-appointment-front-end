import React from 'react';
import PropTypes from 'prop-types';

const DeleteDoctor = ({ doctor }) => {
  const handleDelete = () => {
    console.log(doctor.id);
  };

  return (
    <div>
      <div className="mb-[20px]">
        <img src={doctor.image} alt="hi" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black text-center text-black">
          {doctor.name}
        </h1>
        <div className="text-center">
          <button
            className="border-[2px] border-color-gray width-[100px] bg-color-green mt-[0px] px-[30px] py-[15x] rounded-2xl "
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
