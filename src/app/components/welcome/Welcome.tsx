import strings from "@components/welcome/strings";
import styles from "@components/welcome/styles.module.css"
import AnswerBox from "../answerBox/AnswerBox";

const Welcome = () => {
  return (
    <div>
      <div className={styles["intro"]}>
        {strings.intro}
      </div>
      <div 
        className={styles["enter-password"]}
      >
        {strings.enterPassword}
      </div>
      <AnswerBox />
    </div>
  );
};

export default Welcome;