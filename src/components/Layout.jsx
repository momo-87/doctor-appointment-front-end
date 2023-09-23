import { Outlet } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import NavigationPanel from './NavigationPanel';

const Layout = () => (
  <>
    <MobileMenu />
    <div className="flex">
      <NavigationPanel />
      <Outlet />
    </div>
  </>

);

export default Layout;
