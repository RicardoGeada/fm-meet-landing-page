import styles from "./SectionDivider.module.scss";

type SectionDividerProps = {
    number: number;
}

function SectionDivider({ number}: SectionDividerProps) {

    const formattedNumber = number.toString().padStart(2, "0");

    return(
    <div className={styles["section-divider"]}>
        <div className={styles["section-divider__v-line"]}></div>
        <div className={styles["section-divider__number"]}>{ formattedNumber }</div>
    </div>)
}

export default SectionDivider;