import classes from './Hero.module.css';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={`${classes.container} container`}>
        <HeroImage />
        
        <h1 className={classes.header}>Discover and Find Your Own Fashion!</h1>

        <p className={classes.description}>
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>

      </div>
    </div>
  );
};

export default Hero;
