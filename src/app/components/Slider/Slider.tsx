"use client";

import { useCallback, useState } from "react";
import classNames from "classnames";
import SliderItem from "@components/Slider/SliderItem";
import { SliderItemPropsType } from "@/app/types";

import styles from "@components/Slider/styles.module.css";

const Slider = ({ props }: { props: Array<SliderItemPropsType> }) => {
  const numItems = props.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftButton = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }, [activeIndex, setActiveIndex])
  const handleRightButton = useCallback(() => {
    if (activeIndex < numItems - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, setActiveIndex, numItems])

  return (
    <div className={classNames(styles["slider-wrapper"])}>
      <div className={classNames(styles["slider-track"])}>
        {props.map((sliderItem: SliderItemPropsType, index: number) => {
          return (activeIndex == index ? <SliderItem sliderItem={sliderItem}/> : null);
        })}
        <button className={styles["left"]} type={"button"} onClick={handleLeftButton}>{"<-"}</button>
        <button className={styles["right"]} type={"button"} onClick={handleRightButton}>{"->"}</button>
      </div>
    </div>
  );
};

export default Slider;
