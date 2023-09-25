import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import Hamburger from './Hamburger';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerHandler = (status) => {
    setIsOpen(status);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Hamburger isOpenState={isOpen} buttonHandler={hamburgerHandler} />

      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=''
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              onClick={closeMenu}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='tmp'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={closeMenu}
            >
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to='tmp'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={closeMenu}
            >
              FEATURES
            </NavLink>
          </li>
          <li>
            <NavLink
              to='tmp'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={closeMenu}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
