import { NavLink } from 'react-router-dom';

import logo from '../../images/Rivo_logo.svg';
import cart from '../../images/fi-rr-shopping-bag-add.svg';
import login from '../../images/user-login.svg';
import MainNavigation from './MainNavigation';
import classes from './Header.module.css';
import Button from '../../UI/Button';
import { useState } from 'react';

const Header = () => {
  const [fixedClass, setFixedClass] = useState(false);
  document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      setFixedClass(true);
    } else {
      setFixedClass(false);
    }
  });

  return (
    <header className={`${classes.header} ${fixedClass ? classes.fixed : ''}`}>
      <div className={`${classes.container} container`}>
        <NavLink to='' className={classes.logoLink}>
          <img src={logo} className={classes.logoImg} alt='Rivo logo' />
        </NavLink>

        <MainNavigation />

        <NavLink to='tmp' className={classes.cartLink}>
          <img className={classes.cartImg} src={cart} alt='Cart' />
          <div className={classes.cartStatus}></div>
        </NavLink>

        <NavLink to='tmp' className={classes.loginLink}>
          <img
            className={`${classes.loginImg} hide-md`}
            src={login}
            alt='Login'
          />
        </NavLink>

        <Button to='tmp' title='LOGIN' styleClass='inHeader' />
      </div>
    </header>
  );
};

export default Header;
