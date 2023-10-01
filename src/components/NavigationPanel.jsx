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
    <div className="pt-[100px] hidden md:block h-screen md:fixed md:left-0 border-r z-20 bg-white">
      <aside className=" w-[12.75rem] ">
        <ul className="font-medium items-start flex flex-col ml-3 font-montreal-serial mb-2">
          {links.map((link) => (
            <li
              key={link.text}
              className={`px-5 whitespace-nowrap hover:text-color-green h-[48px] flex items-center w-full font-bold ${
                `/${link.path}` === window.location.pathname
                  ? 'bg-color-green text-white'
                  : ''
              }`}
            >
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
          <li className="px-5 whitespace-nowrap hover:text-color-green h-[48px] flex items-center w-full font-bold logout">
            <button
              type="button"
              className="flex items-center"
              onClick={() => logout()}
            >
              <i className="fa-solid fa-arrow-right-from-bracket text-black mr-2 logout-ico" />
              <p className="text-base uppercase font-bold">Logout</p>
            </button>
          </li>
        </ul>
        <br />
        {' '}
        <hr />
        <div className="mt-8 ml-8 w-36">
          <Socials />
        </div>
      </aside>
    </div>
  );
};

export default NavigationPanel;
