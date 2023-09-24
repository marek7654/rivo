import classes from './Button.module.css';

const Button = (props) => {
  return (
    <a
      className={`${classes.button} ${classes[props.styleClass]}`}
      href={props.href}
    >
      {props.title}
    </a>
  );
};

export default Button;
