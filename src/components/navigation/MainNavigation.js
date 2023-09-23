import { NavLink } from 'react-router-dom';

import logo from '../../images/Rivo_logo.svg';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <NavLink to='' end>
          <img src={logo} className={classes.logo} alt="Rivo logo" />
        </NavLink>
        <nav>
          <ul className={classes.list}>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
