import { Outlet } from 'react-router-dom';
import NavigationPanel from './NavigationPanel';

const Layout = () => (
  <div className="flex">
    <NavigationPanel />
    <Outlet />
  </div>
);

export default Layout;
