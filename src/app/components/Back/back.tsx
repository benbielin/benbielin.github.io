"use client";

import Link from "next/link";
import styles from "@components/Back/styles.module.css";

const Back = () => {
  return (
    <div className={styles["back"]}>
      <Link style={{
        margin: "8px",
      }} href={"/"}>{"<- Back to home page"}</Link>
    </div>
  );
};

export default Back;
