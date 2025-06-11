import styles from "./Hero.module.scss";
import heroImage from "./../../assets/images/tablet/image-hero.png";
import heroImageLeft from "./../../assets/images/desktop/image-hero-left.png";
import heroImageRight from "./../../assets/images/desktop/image-hero-right.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Hero() {
  const isDesktop = useMediaQuery("(min-width: 1080px)");

  return (
    <section className={styles["hero-section"]}>
      <picture>
        <source media="(min-width: 1080px)" srcSet={heroImageLeft} />
        <img src={heroImage} alt="hero-image" />
      </picture>

      <div className={styles["hero-section__content"]}>
        <h1 className={styles["hero-section__headline"]}>Group Chat for Everyone</h1>
        <p className={styles["hero-section__description"]}>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className={styles["hero-section__buttons"]}>
          <button className="btn btn--blue">Download <span className="btn__subtext btn__subtext--blue">v1.3</span></button>
          <button className="btn btn--purple">What is it?</button>
        </div>
      </div>

      {isDesktop && (
        <picture>
          <img src={heroImageRight} alt="hero-image-right" />
        </picture>
      )}
    </section>
  );
}

export default Hero;
