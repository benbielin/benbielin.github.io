"use client";

import styles from "@components/Alert/styles.module.css";
import { useCallback, useState } from "react";

const Alert = ({ text }: { text: string }) => {
  const [closed, setClosed] = useState(false);

  const handleClick = useCallback(() => {
    setClosed(true)
  },[])

  return ( !closed && 
    <div className={styles["alert-wrapper"]}>
      <div className={styles["alert-text"]}>{text}</div>
      <div className={styles["alert-button-wrapper"]}>
        <button type={"button"} className={styles["alert-button"]} onClick={handleClick}>
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
