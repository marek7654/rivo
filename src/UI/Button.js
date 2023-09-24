import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = (props) => {
  const { title, to, styleClass, onClickHandler } = props;
  return (
    <Link
      className={`${classes.button} ${styleClass ? classes[styleClass] : ''}`}
      to={to}
      onClick={onClickHandler}
    >
      {title}
    </Link>
  );
};

export default Button;
