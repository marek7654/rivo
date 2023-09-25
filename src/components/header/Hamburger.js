import classes from './Hamburger.module.css';

const Hamburger = ({ buttonHandler, isOpenState }) => {

  const clickHandler = (e) => {
    buttonHandler(!isOpenState);
  };

  return (
    <input
      className={classes.hamburger}
      type='checkbox'
      role='button'
      aria-label='Display the menu'
      value={isOpenState}
      checked={isOpenState}
      onChange={clickHandler}
    />
  );
};

export default Hamburger;
