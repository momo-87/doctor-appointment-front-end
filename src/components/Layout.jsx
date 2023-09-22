import { Outlet, useNavigate } from "react-router-dom";
import NavigationPanel from "./NavigationPanel";
import { useEffect } from "react";
import { getUser } from "../redux/auth/authSlice";
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate();
  const existingUser = useSelector(getUser);

  useEffect(() => {
    if (!existingUser) {
      return navigate("/auth");
    }
  }, [existingUser]);

  return (
    <div className="flex">
      <NavigationPanel />
      <Outlet />
    </div>
  );
};

export default Layout;
