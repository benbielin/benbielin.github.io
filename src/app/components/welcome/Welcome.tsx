import strings from "@components/welcome/strings";
import styles from "@components/welcome/styles.module.css";
import AnswerBox from "../answerBox/AnswerBox";

const Welcome = ({
  access,
  handleSubmitPassword,
}: {
  access: boolean;
  handleSubmitPassword: () => void;
}) => {
  return (
    <div>
      <div className={styles["intro"]}>{strings.intro}</div>
      <div className={styles["enter-password"]}>{strings.enterPassword}</div>
      {!access ? (
        <AnswerBox handleSubmitPassword={handleSubmitPassword} />
      ) : (
        <>
          <div className={styles["password-correct"]}>
            {strings.passwordCorrect}
          </div>
          <div className={styles["password-correct"]}>
            {strings.scrollToSeeMore}
          </div>
        </>
      )}
    </div>
  );
};

export default Welcome;
