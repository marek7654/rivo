import { NavLink } from 'react-router-dom';

import logo from '../../images/Rivo_logo.svg';
import cart from '../../images/fi-rr-shopping-bag-add.svg';
import login from '../../images/user-login.svg';
import MainNavigation from './MainNavigation';
import classes from './Header.module.css';
import Button from '../../UI/Button';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes.container} container`}>

        <NavLink to='' className={classes.logoLink}>
          <img src={logo} className={classes.logoImg} alt='Rivo logo' />
        </NavLink>

        <MainNavigation />

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
        </NavLink>

        <Button to='login' title='LOGIN' styleClass='inHeader'/>
      </div>
    </header>
  );
};

export default Header;
