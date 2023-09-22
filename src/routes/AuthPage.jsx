import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate, getUser } from "../redux/auth/authSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [user_name, setUser_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate({ user_name }));
  };

  useEffect(() => {
    if (getUser()) {
      return;
    }
  }, []);

  return (
    <div class="bg-red-200 h-screen flex items-center">
      <form onSubmit={handleSubmit} class="flex flex-row mx-auto">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          value={user_name}
          onChange={(e) => setUser_name(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
