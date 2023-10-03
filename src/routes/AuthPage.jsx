import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  authenticate,
  getUser,
  authStatus,
  authError,
} from '../redux/auth/authSlice';
import logo from '../assets/images/logo.png';

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = useSelector(getUser);
  const auth = useSelector(authStatus);
  const error = useSelector(authError);

  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate({ user_name: userName }));
  };

  useEffect(() => {
    if (existingUser || auth === 'succeeded') {
      return navigate('/');
    }

    return () => {};
  }, [existingUser, auth]);

  return (
    <div className="flex flex-col items-center justify-center main_bg">
      <div className="z-10">
        <div className=" w-48 py-4 self-center mx-auto">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="flex flex-row bg-color-green border border-white rounded-full items-center px-2">
            <input
              type="text"
              className="p-2 font-semibold rounded-full"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter username"
            />
            <button type="submit" className="btn btn-primary p-4">
              <i className="fa-regular fa-circle-right fa-lg text-white" />
            </button>
          </div>
        </form>
        {error && (
          <div className="text-white bg-red-500 font-semibold my-2 w-fit mx-auto">
            ERROR: Backend not available
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
