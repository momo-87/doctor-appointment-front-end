import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
import NavigationPanel from "./NavigationPanel";
import { getUser } from "../redux/auth/authSlice";
import { fetchAllDoctors, getDoctors } from "../redux/doctor/doctorSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = useSelector(getUser);
  const doctors = useSelector(getDoctors);
    
  useEffect(() => {
    if (!existingUser) {
      return navigate("/auth");
    } else {
      if (doctors === null) {
        dispatch(fetchAllDoctors());
      }
    }
    return () => {};
  }, [existingUser]);

  return (
    <>
      <div className="flex">
        <MobileMenu />
        <NavigationPanel />
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
};

export default Layout;
