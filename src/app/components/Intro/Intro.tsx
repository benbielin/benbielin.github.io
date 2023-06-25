"use client";

import Image from "next/image";
import styles from "@components/Intro/styles.module.css";
import IntroDescription from "@components/Intro/IntroDescription";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <div className={styles["intro-card"]}>
        <div className={styles["intro"]}>
          <Image src="" alt="placeholder" />
        </div>
        <div 
          className={styles["intro"]}
          style={{
            position: "relative",
          }}
        >
          <IntroDescription />
        </div>
      </div>
    </div>
  );
};

export default Intro;
