"use client";

import styles from "@components/answerBox/styles.module.css";
import { KeyboardEvent, useState } from "react";

const AnswerBox = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleTextChange = (e) => {
    e.preventDefault();
    e === '' ? setIsEmpty(true) : setIsEmpty(false);
  };

  return (
    <div
      className={styles['password-container']}
    >
      <label htmlFor={"password"}></label>
      <input
        className={styles["password-box"]}
        type={"text"}
        id={"password"}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default AnswerBox;
