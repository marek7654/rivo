import classes from './Hamburger.module.css';

const Hamburger = () => {
  return <input className={classes.hamburger} type="checkbox" role="button" aria-label="Display the menu" />;
}

export default Hamburger;
