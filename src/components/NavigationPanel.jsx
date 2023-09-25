import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const links = [
  { path: 'doctors', text: 'DOCTOR' },
  { path: 'new-appointement', text: 'NEW APPOINTEMENT' },
  { path: 'my-appointements', text: 'MY APPOINTEMENTS' },
  { path: 'add-doctor', text: 'ADD DOCTOR' },
  { path: 'delete-doctor', text: 'DELETE DOCTOR' },
];

const NavigationPanel = () => (
  <div className="border-r h-screen pt-[100px]">
    <aside className="hidden md:block">
      <ul className="space-y-2 font-medium items-start flex flex-col ml-3 gap-2">
        {links.map((link) => (
          <li key={link.text} className={`pl-5 whitespace-nowrap active:bg-color-green active:text-white hover:bg-color-green hover:text-white h-[40px] flex items-center w-full pr-5 font-bold ${({ isActive }) => (isActive ? 'active' : '')}`}>
            <NavLink
              to={link.path}
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
