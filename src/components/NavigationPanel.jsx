import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const links = [
  { path: '/', text: 'DOCTORS' },
  { path: 'new-appointment', text: 'NEW APPOINTMENT' },
  { path: 'my-appointments', text: 'MY APPOINTMENTS' },
  { path: 'add-doctor', text: 'ADD DOCTOR' },
  { path: 'delete-doctor', text: 'DELETE DOCTOR' },
];

const NavigationPanel = () => (
  <div className="border-r h-screen pt-[100px] max-w-[210px]">
    <aside className="hidden md:block w-full">
      <ul className="space-y-2 font-medium items-start flex flex-col ml-3 gap-2">
        {links.map((link) => (
          <li key={link.text} className={`whitespace-nowrap active:bg-color-green active:text-white hover:bg-color-green hover:text-white h-[40px] flex items-center w-full font-bold ${({ isActive }) => (isActive ? 'active' : '')}`}>
            <NavLink
              to={link.path}
              className="w-full pl-5 pr-3"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  </div>
);

export default NavigationPanel;
