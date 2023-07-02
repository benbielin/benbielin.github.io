"use client";

import Image from "next/image";
import styles from "@components/Intro/styles.module.css";
import IntroDescription from "@components/Intro/IntroDescription";
import Slider from "@components/Slider/Slider";
import { SliderItemPropsType } from "@/app/types";

const Intro = () => {
  const sliderCards: Array<SliderItemPropsType> = [
    {
      imageUrl: "asdf",
      text: "asdf",
    },
    {
      imageUrl: "zxcv",
      text: "zxcv",
    },
  ]

  return (
    <div className={styles["intro-wrapper"]}>
      <div className={styles["intro-card"]}>
        <div className={styles["intro"]}>
          <Slider props={sliderCards}/>
        </div>
        <div 
          className={styles["intro"]}
          style={{
            position: "relative",
            margin: "8px",
          }}
        >
          <IntroDescription />
        </div>
      </div>
    </div>
  );
};

export default Intro;
