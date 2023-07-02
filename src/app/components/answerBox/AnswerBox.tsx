"use client";

import styles from "@components/answerBox/styles.module.css";
import { useState } from "react";
import classNames from "classnames";

const AnswerBox = ({
  handleSubmitPassword,
}: {
  handleSubmitPassword: () => void;
}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const handleTextChange = (e: any) => {
    e.preventDefault();
    e.target.value === '' ? setIsEmpty(true) : setIsEmpty(false);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const handleEnter = (e: any) => {
    if (!isEmpty && e.key === 'Enter') {
      handleSubmitPassword();
    }
  }

  return (
    <div className={styles["password-wrapper"]}>
      <label htmlFor={"password"}></label>
      <input
        placeholder="Enter password"
        className={styles["password-box"]}
        type={"text"}
        id={"password"}
        onChange={handleTextChange}
        onKeyDown={handleEnter}
      />
      <button 
        type={"submit"}
        style={{
          marginLeft: "2px",
        }}
        className={
          classNames({
            [styles["submit-button"]] : !isEmpty && isHover,
          })} 
        disabled={isEmpty} 
        onClick={handleSubmitPassword}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {"->"}
      </button>
    </div>
  );
};

export default AnswerBox;
