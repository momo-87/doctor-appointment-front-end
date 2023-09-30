import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/auth/authSlice';
import Socials from './Socials';

const links = [
  { path: '', text: 'DOCTORS' },
  { path: 'new-appointment', text: 'NEW APPOINTMENT' },
  { path: 'my-appointments', text: 'MY APPOINTMENTS' },
  { path: 'add-doctor', text: 'ADD DOCTOR' },
  { path: 'delete-doctor', text: 'DELETE DOCTOR' },
];

const NavigationPanel = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="border-r pt-[100px] md:fixed md:left-0">
      <aside className="hidden md:block w-64">
        <ul className="space-y-2 font-medium items-start flex flex-col ml-3 gap-2">
          {links.map((link) => (
            <li
              key={link.text}
              className={`pl-5 whitespace-nowrap hover:bg-color-green hover:text-white h-[40px] flex items-center w-full pr-5 font-bold ${
                `/${link.path}` === window.location.pathname
                  ? 'active-link'
                  : ''
              }`}
            >
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
          <li className="flex flex-row hover:bg-color-green hover:text-white w-full logout">
            <button
              type="button"
              className="pl-5 whitespace-nowrap h-[40px] flex items-center pr-5 font-bold"
              onClick={() => logout()}
            >
              <i className="fa-solid fa-arrow-right-from-bracket text-black mr-2 logout-ico" />
              <p className="text-base uppercase">Logout</p>
            </button>
          </li>
        </ul>
        <br />
        {' '}
        <hr />
        <div className="pt-8 pl-8 w-48">
          <Socials />
        </div>
      </aside>
    </div>
  );
};

export default NavigationPanel;
