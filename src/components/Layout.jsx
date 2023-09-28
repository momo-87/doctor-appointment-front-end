import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
import NavigationPanel from "./NavigationPanel";
import { getUser } from "../redux/auth/authSlice";
import { fetchAllDoctors, getDoctors } from "../redux/doctor/doctorSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToast, toastMessage } from '../redux/mainPage/mainPageSlice';

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = useSelector(getUser);
  const doctors = useSelector(getDoctors);
  
  const notification = useSelector(toastMessage);
  
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


  useEffect(() => {
    if (notification !== null && notification !== undefined) {
      switch (notification.type) {
        case 'success':
          toast.success(notification.message, {
            position: toast.POSITION.TOP_CENTER
          });
          break;
        case 'error':
          toast.error(notification.message, {
            position: toast.POSITION.TOP_CENTER
          });
          break;
      }
    }

    setTimeout(() => {
      setToast(null);
      toast.dismiss();
    }, 5000);

  }, [notification])

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
