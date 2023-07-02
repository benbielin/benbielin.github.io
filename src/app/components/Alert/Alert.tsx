"use client";

import styles from "@components/Alert/styles.module.css";

const Alert = ({ text }: { text: string }) => {
  return (
    <div className={styles["alert-wrapper"]}>
      <div className={styles["alert-text"]}>{text}</div>
      <div className={styles["alert-button-wrapper"]}>
        <button type={"button"} className={styles["alert-button"]}>
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
