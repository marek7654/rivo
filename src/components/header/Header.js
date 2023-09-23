import { NavLink } from 'react-router-dom';

import logo from '../../images/Rivo_logo.svg';
import cart from '../../images/fi-rr-shopping-bag-add.svg';
import login from '../../images/user-login.svg';
import MainNavigation from './MainNavigation';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <MainNavigation />

        <NavLink to=''>
          <img src={logo} className={classes.logo} alt='Rivo logo' />
        </NavLink>

        <NavLink to='cart' className={classes.cartLink}>
          <img src={cart} alt='Cart' />
          <div></div>
        </NavLink>

        <NavLink to='login' className={classes.loginLink}>
          <img src={login} alt='Login' />
          <span>LOGIN</span>
        </NavLink>

      </div>
    </header>
  );
};

export default Header;
