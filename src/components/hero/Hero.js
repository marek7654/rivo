import Button from '../../UI/Button';
import classes from './Hero.module.css';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section className={classes.hero} style={{minHeight: `${window.innerHeight - 102}px`}}>
      <div className={`${classes.container} container`}>
        <HeroImage />

        <div className={classes.contentWrapper}>
          <h1 className={classes.header}>Discover and Find Your Own Fashion!</h1>
          <p className={classes.description}>
            Explore our curated collection of stylish clothing and accessories
            tailored to your unique taste.
          </p>
          <Button herf="#" title="EXPLORE NOW" styleClass="accent"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
