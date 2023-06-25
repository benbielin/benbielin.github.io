"use client";

import styles from "@components/answerBox/styles.module.css";
import { useState } from "react";

const AnswerBox = ({
  handleSubmitPassword,
}: {
  handleSubmitPassword: () => void;
}) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleTextChange = (e: any) => {
    e.preventDefault();
    e.target.value === '' ? setIsEmpty(true) : setIsEmpty(false);
  };

  return (
    <div className={styles["password-wrapper"]}>
      <label htmlFor={"password"}></label>
      <input
        placeholder="Enter password"
        className={styles["password-box"]}
        type={"text"}
        id={"password"}
        onChange={handleTextChange}
      />
      <button disabled={isEmpty} onClick={handleSubmitPassword}>{"->"}</button>
    </div>
  );
};

export default AnswerBox;
