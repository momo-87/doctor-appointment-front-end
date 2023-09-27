import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';
import NavigationPanel from './NavigationPanel';
import { getUser } from '../redux/auth/authSlice';

const Layout = () => {
  const navigate = useNavigate();
  const existingUser = useSelector(getUser);

  useEffect(() => {
    if (!existingUser) {
      return navigate('/auth');
    }
    return () => {};
  }, [existingUser]);

  return (
    <>
      <div className="flex">
        <MobileMenu />
        <NavigationPanel />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
