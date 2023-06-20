import strings from "@components/welcome/strings";
import styles from "@components/welcome/styles.module.css"

const Welcome = () => {
  return (
    <div>
      <div className={styles["intro"]}>
        {strings.intro}
      </div>
      <div 
        className={styles["enter-password"]}
        style={{
          marginTop: '8px',
        }}
      >
        {strings.enterPassword}
      </div>
    </div>
  );
};

export default Welcome;