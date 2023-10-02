import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doctorsCreateThunk } from '../redux/doctor/doctorSlice';
import { getUser } from '../redux/auth/authSlice';

const AddDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [rate, setRate] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [image, setImage] = useState('');
  const [hospital, setHospital] = useState('');

  const user = useSelector(getUser);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('doctor[name]', name);
    formData.append('doctor[image]', image);
    formData.append('doctor[specialization]', specialization);
    formData.append('doctor[bio]', bio);
    formData.append('doctor[rate]', rate);
    formData.append('doctor[hospital]', hospital);

    const userId = user.id;
    formData.append('doctor[user_id]', userId);

    if (name !== '' && image !== '' && specialization !== '' && bio !== '' && rate !== '' && hospital !== '') {
      Promise.resolve(dispatch(doctorsCreateThunk(formData))).then(() => {
        setName('');
        setImage('');
        setSpecialization('');
        setBio('');
        setRate('');
        setHospital('');

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      });

      navigate('/');
    }
  };

  return (
    <div className="w-screen">
      <div className="flex flex-col ">
        <h3 className="flex items-center mx-auto pt-10 my-10 font-bold text-3xl">Add Doctor</h3>
        <form onSubmit={(e) => { handleSubmit(e); }} encType="multipart/form-data" className="mx-auto">
          <div className="flex flex-col ">
            <div className="mb-4 mx-auto">
              <label htmlFor="name" className="flex font-semibold">Doctor Name</label>
              <input
                type="text"
                id="name"
                className="flex text-lm p-2.5 input-container border-2 rounded-lg border-gray-500"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 mx-auto">
              <label htmlFor="images" className="mb-1 flex font-semibold">Photo</label>
              <input
                ref={fileInputRef}
                className="relative m-0 block w-full min-w-0 flex-auto
                          bg-clip-padding px-2 py-[0.61rem] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.61rem]
                          file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit
                          file:px-2 file:py-[0.61rem] file:transition file:duration-150 file:ease-in-out
                          file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
                          hover:file:bg-neutral-400 focus:border-primary focus:shadow-te-primary focus:outline-none
                          dark:border-neutral-600 dark:text-neutral-300 dark:file:bg-neutral-700 dark:file:text-neutral-100
                          dark:focus:border-primary text-lm rounded-lg border-2 input-container border-gray-500"
                type="file"
                id="image"
                style={{
                  backgroundColor: 'white',
                  fontSize: '14px',
                }}
                name="image"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
            </div>

            <div className="mb-4 mx-auto">
              <label htmlFor="specialization" className="flex font-semibold">Specialization</label>
              <input
                type="text"
                id="specialization"
                className="flex text-lm border-2 rounded-lg p-2.5 input-container border-gray-500"
                placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 mx-auto">
              <label htmlFor="bio" className="flex font-semibold">Bio</label>
              <input
                type="text"
                id="bio"
                className="flex text-lm rounded-lg border-2 p-2.5 input-container border-gray-500"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 mx-auto">
              <label htmlFor="rate" className="flex font-semibold">Rate</label>
              <input
                type="text"
                id="rate"
                className="flex text-lm rounded-lg border-2 p-2.5 input-container border-gray-500"
                placeholder="Rate"
                value={rate}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                  setRate(numericValue);
                }}
                required
              />
            </div>

            <div className="mb-4 mx-auto">
              <label htmlFor="hospital" className="flex font-semibold">Hospital</label>
              <input
                type="text"
                id="hospital"
                className="flex text-lm rounded-lg border-2 p-2.5 input-container border-gray-500"
                placeholder="Hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center pt-3 pb-10">
            <button
              type="submit"
              className="bg-color-green font-bold text-white hover:bg-white hover:text-color-green px-7 p-3 rounded-full border transition duration-300 ease-in-out hover:border-color-green"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
