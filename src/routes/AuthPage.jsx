import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, getUser, authStatus, authError } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = useSelector(getUser);
  const auth = useSelector(authStatus);
  const error = useSelector(authError);

  const [user_name, setUser_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate({ user_name }));
    return navigate("/");
  };

  useEffect(() => {
    if (existingUser || auth === "succeeded") {
      console.log("SDASD", existingUser);
      return navigate("/");
    } else {
      console.log("NOTF", existingUser, auth, error);
    }
  }, [existingUser, auth]);

  return (
    <div className="flex items-center main_bg">
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="flex flex-row bg-color-green border border-white rounded-full items-center px-2">
          <input
            type="text"
            className="p-2 font-semibold rounded-full"
            value={user_name}
            required
            onChange={(e) => setUser_name(e.target.value)}
            placeholder="Enter username"
          />
          <button type="submit" className="btn btn-primary p-4">
            <i className="fa-regular fa-circle-right fa-lg text-white"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
