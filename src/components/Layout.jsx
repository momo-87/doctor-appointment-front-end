import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import MobileMenu from './MobileMenu';
import NavigationPanel from './NavigationPanel';
import { getUser } from '../redux/auth/authSlice';
import { fetchAllDoctors, getDoctors } from '../redux/doctor/doctorSlice';
import 'react-toastify/dist/ReactToastify.css';
import { resetAppointments } from '../redux/appointment/appointmentSlice';

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = useSelector(getUser);
  const doctors = useSelector(getDoctors);

  useEffect(() => {
    if (!existingUser) {
      dispatch(resetAppointments());
      return navigate('/auth');
    }
    if (doctors === null) {
      dispatch(fetchAllDoctors());
    }

    return () => {};
  }, [existingUser, dispatch]);

  return (
    <>
      <div className="flex mt-[50px] md:mt-0 md:ml-[12.75rem] h-screen">
        <MobileMenu />
        <NavigationPanel />
        <Outlet />
        <ToastContainer limit={1} />
      </div>
    </>
  );
};

export default Layout;
