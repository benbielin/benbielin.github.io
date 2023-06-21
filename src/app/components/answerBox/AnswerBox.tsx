"use client";

import styles from "@components/answerBox/styles.module.css";
import { KeyboardEvent, useState } from "react";

const AnswerBox = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleTextChange = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles['password-container']}
    >
      <label htmlFor={"password"}></label>
      <input
        placeholder="Enter password"
        className={styles["password-box"]}
        type={"text"}
        id={"password"}
        onChange={handleTextChange}
      />
      <button>
        {"->"}
      </button>
    </div>
  );
};

export default AnswerBox;
