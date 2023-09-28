import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [rate, setRate] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [image, setImage] = useState('');
  const [hospital, setHospital] = useState('');

  return (
    <div className="w-screen bg-color-green">
      <div className="flex flex-col ">
        <h3 className="flex items-center mx-auto my-10 text-white font-bold text-3xl">Add Doctor</h3>
        <form onSubmit={(e) => { handleSubmit(e); }} encType="multipart/form-data" className="mx-auto">
          <div className="flex flex-col ">
            <div className="mb-4">
              <label htmlFor="name" className="flex font-semibold dark:text-white">Doctor Name</label>
              <input
                type="text"
                id="name"
                className="flex text-sm rounded-lg p-2.5 "
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="images" className="mb-1 flex font-semibold dark:text-white">Photo</label>
              <input
                type="text"
                id="image"
                className="flex text-sm rounded-lg p-2.5"
                placeholder="Photo"
                value={image}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="specialization" className="flex font-semibold dark:text-white">Specialization</label>
              <input
                type="text"
                id="specialization"
                className="flex text-sm rounded-lg p-2.5"
                placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bio" className="flex font-semibold dark:text-white">Bio</label>
              <input
                type="text"
                id="bio"
                className="flex text-sm rounded-lg p-2.5"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rate" className="flex font-semibold dark:text-white">Rate</label>
              <input
                type="text"
                id="rate"
                className="flex text-sm rounded-lg p-2.5"
                placeholder="Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="hospital" className="flex font-semibold dark:text-white">Hospital</label>
              <input
                type="text"
                id="hospital"
                className="flex text-sm rounded-lg p-2.5"
                placeholder="Hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="flex mx-11 bg-white font-bold text-color-green hover:bg-color-green hover:text-white hover:border px-5  p-2 rounded-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
