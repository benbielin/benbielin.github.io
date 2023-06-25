"use client";

import Image from "next/image";
import styles from "@components/Intro/styles.module.css";
import IntroDescription from "@components/IntroDescription/IntroDescription";

const Intro = () => {
  return (
    <div 
      className={styles["intro-wrapper"]}
    >
      <div className={styles["intro"]}>
        <Image src="" alt="placeholder" />
      </div>
      <div className={styles["intro"]}>
        <IntroDescription />
      </div>
    </div>
  );
};

export default Intro;
