import styles from "./Footer.module.scss";

import SectionDivider from "../SectionDivider/SectionDivider";

function Footer() {
  return (
  <footer className={styles["footer"]}>
    <SectionDivider number={2}/>
    <div className={styles["footer__content"]}>
        <h2 className={styles["footer__title"]}>Experience more together</h2>
        <p className={styles["footer__text"]}>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <button className="btn btn--purple" type="button">Download <span className="btn__subtext btn__subtext--purple">v1.3</span></button>
    </div>
  </footer>);
};

export default Footer;