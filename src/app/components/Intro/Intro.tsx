"use client";

import Image from "next/image";
import Click from "@components/Click/Click";
import styles from "@components/Intro/styles.module.css";
import IntroDescription from "@components/Intro/IntroDescription";
import Slider from "@components/Slider/Slider";
import { SliderItemPropsType } from "@/app/types";

const Intro = () => {
  const sliderCards: Array<SliderItemPropsType> = [
    {
      imageUrl: "/images/me_0.jpg",
      text: "me 0",
    },
    {
      imageUrl: "/images/me_1.jpg",
      text: "me 1",
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
