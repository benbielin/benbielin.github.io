import strings from "@components/Intro/strings";
import styles from "@components/Intro/styles.module.css";

const IntroDescription = () => {
  return <div className={styles["intro-description"]}>{strings.intro}</div>;
};

export default IntroDescription;
