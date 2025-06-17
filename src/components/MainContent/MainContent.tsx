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
      <div className={styles["image-collage"]}>
        <img src={imageWomanInVideocall} alt="" />
        <img src={imageWomenVideochatting} alt="" />
        <img src={imageMenInMeeting} alt="" />
        <img src={imageManTexting} alt="" />
      </div>
      {/* text-content */}
    </section>
  );
}

export default MainContent;
