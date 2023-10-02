import { NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/images/logo.png';

const links = [
  { path: '/', text: 'DOCTOR' },
  { path: 'new-appointment', text: 'NEW APPOINTMENT' },
  { path: 'my-appointments', text: 'MY APPOINTMENTS' },
  { path: 'add-doctor', text: 'ADD DOCTOR' },
  { path: 'delete-doctor', text: 'DELETE DOCTOR' },
];

const MobileMenu = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState({});
  return (
    <header className="bg-color-green h-[50px] w-full md:hidden fixed top-0 z-20">
      <div className="flex py-3.5 ml-3">
        { toggleMobileMenu.display ? (
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu({});
            }}
          >
            <RxCross2 className="text-2xl" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setToggleMobileMenu({ display: 'flex' });
            }}
          >
            <FaBars className="text-xl" />
          </button>
        )}
      </div>
      <div className="w-[150px] ml-[57%] -mt-[45px]">
        <img src={logo} alt="logo" className="w-full h-auto" />
      </div>
      <nav>
        <ul className="w-full font-medium hidden flex-col gap-2 h-screen bg-color-green items-center fixed top-[48px] bg-opacity-[90%]" style={toggleMobileMenu}>
          {links.map((link) => (
            <li key={link.text} className="pl-5 whitespace-nowrap text-color-aliceblue h-[40px] flex items-center w-full pr-5 font-bold">
              <NavLink
                to={link.path}
                onClick={() => {
                  setToggleMobileMenu({});
                }}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileMenu;
