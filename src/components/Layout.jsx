// import { Outlet, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavigationPanel from './NavigationPanel';
import MobileMenu from './MobileMenu';

const Layout = () => (
  <div className="flex">
    <MobileMenu />
    <NavigationPanel />
    <Outlet />
  </div>
);
export default Layout;
