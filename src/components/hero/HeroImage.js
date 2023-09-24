import image from '../../images/rivo_hero_lady.png';
import dots from '../../images/dots.png';

import classes from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <img className={`${classes.dots} ${classes.dots1}`} src={dots} alt='dots 1' />
      <img className={`${classes.dots} ${classes.dots2}`} src={dots} alt='dots 2' />
    </div>
  );
};

export default HeroImage;
