import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import Hamburger from './Hamburger';

const MainNavigation = () => {
  return (
    <>
    <Hamburger/>
    
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to=''
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to='shop'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            to='features'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            FEATURES
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
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
