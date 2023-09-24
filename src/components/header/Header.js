import { NavLink } from 'react-router-dom';

import logo from '../../images/Rivo_logo.svg';
import cart from '../../images/fi-rr-shopping-bag-add.svg';
import login from '../../images/user-login.svg';
import MainNavigation from './MainNavigation';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes.container} container`}>
        <MainNavigation />

        <NavLink to='' className={classes.logoLink}>
          <img src={logo} className={classes.logoImg} alt='Rivo logo' />
        </NavLink>

        <NavLink to='cart' className={classes.cartLink}>
          <img className={classes.cartImg} src={cart} alt='Cart' />
          <div className={classes.cartStatus}></div>
        </NavLink>

        <NavLink to='login' className={classes.loginLink}>
          <img
            className={`${classes.loginImg} hide-md`}
            src={login}
            alt='Login'
          />
          <span className='hide'>LOGIN</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
