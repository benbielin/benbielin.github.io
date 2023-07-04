"use client";

import { Fragment, useCallback, useState } from "react";

import { SliderItemPropsType } from "@/app/types";

import IntroDescription from "@components/Intro/IntroDescription";
import Slider from "@components/Slider/Slider";
import { useScrollLock } from "@hooks/useScrollLock";


import styles from "@components/Intro/styles.module.css";

const Intro = () => {
  const sliderCards: Array<SliderItemPropsType> = [
    {
      image: {
        imageUrl: "/images/me_0.jpg",
        height: 852,
        width: 640,
      },
      text: "me 0",
    },
    {
      image:{
        imageUrl: "/images/me_1.jpg",
        height: 852,
        width: 640,
      },
      text: "me 1",
    },
  ]

  const numItems = sliderCards.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleLock = useScrollLock();

  const handleOpenChange = useCallback(() => {
    handleLock(!open);
    setOpen(!open);
  }, [open, setOpen, handleLock]) 

  const handleLeftButton = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }, [activeIndex, setActiveIndex]);
  const handleRightButton = useCallback(() => {
    if (activeIndex < numItems - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, setActiveIndex, numItems]);

  return (
    <div className={styles["intro-wrapper"]}>
      <div className={styles["intro-card"]}>
        <div className={styles["intro"]}>
          <div style={{
            display: 'block',
            height: '100%',
            width: '100%',
          }}>
          {
          <Slider items={sliderCards} open={false} setOpen={handleOpenChange} activeIndex={activeIndex} handleRightButton={handleRightButton} handleLeftButton={handleLeftButton}/>
          }{open &&
            <Slider items={sliderCards} open setOpen={handleOpenChange} activeIndex={activeIndex} handleRightButton={handleRightButton} handleLeftButton={handleLeftButton}/>
          }
          </div>
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
