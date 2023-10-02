import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  authenticate,
  getUser,
  authStatus,
  authError,
} from '../redux/auth/authSlice';

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
        {error && (
          <div className="text-red-500 font-semibold">
            ERROR: Backend not available
          </div>
        )}
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
      </div>
    </div>
  );
};

export default AuthPage;
