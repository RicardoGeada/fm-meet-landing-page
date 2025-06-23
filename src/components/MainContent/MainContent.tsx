import NumberDivider from "../SectionDivider/SectionDivider";
import styles from "./MainContent.module.scss";
import imageWomanInVideocall from "./../../assets/images/desktop/image-woman-in-videocall.jpg";
import imageWomenVideochatting from "./../../assets/images/desktop/image-women-videochatting.jpg";
import imageMenInMeeting from "./../../assets/images/desktop/image-men-in-meeting.jpg";
import imageManTexting from "./../../assets/images/desktop/image-man-texting.jpg";

function MainContent() {
  return (
    <section className={styles["main-content"]}>
      <NumberDivider number={1} />

      <div className={styles["main-content__image-collage"]}>
        <img src={imageWomanInVideocall} alt="Woman in video call" />
        <img src={imageWomenVideochatting} alt="Group of women in a video chat" />
        <img src={imageMenInMeeting} alt="Men in a business meeting" />
        <img src={imageManTexting} alt="Man texting during meeting" />
      </div>

      <div className={styles["main-content__text"]}>
        <header className={styles["main-content__header"]}>
          <span className={styles["main-content__eyebrow"]}>BUILT FOR MODERN USE</span>
          <h2 className={styles["main-content__title"]}>Smarter meetings, all in one place</h2>
        </header>
        <p className={styles["main-content__description"]}>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
}

export default MainContent;
