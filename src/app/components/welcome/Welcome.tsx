"use client";

import strings from "@/app/components/welcome/strings";
import styles from "@components/welcome/styles.module.css";
import AnswerBox from "@/app/components/answerBox/AnswerBox";

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
        <>
          <AnswerBox handleSubmitPassword={handleSubmitPassword} />
          <div className={styles["hint"]}>{"(Hint: Just try something! Maybe its correct!)"}</div>
        </>
      ) : (
        <>
          <div className={styles["password-correct"]}>
            {strings.passwordCorrect} {strings.scrollToSeeMore}
          </div>
          <div className={styles["password-correct"]}></div>
        </>
      )}
    </div>
  );
};

export default Welcome;
