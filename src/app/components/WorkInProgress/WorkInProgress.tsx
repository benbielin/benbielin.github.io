"use client";

import styles from "@components/WorkInProgress/styles.module.css";

const WorkInProgress = () => {
  return (
    <div className={styles['work-in-progress-wrapper']}>
      <div
        className={styles['work-in-progress']}
      >
        {"Work In Progress"}
      </div>
    </div>
  );
};

export default WorkInProgress;
