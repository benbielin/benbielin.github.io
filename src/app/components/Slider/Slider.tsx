"use client";

import { ReactNode, useCallback, useState } from "react";
import classNames from "classnames";
import SliderItem from "@components/Slider/SliderItem";
import { SliderItemPropsType } from "@/app/types";

import styles from "@components/Slider/styles.module.css";

const Slider = ({ props }: { props: Array<SliderItemPropsType> }) => {
  const numItems = props.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [mouseIn, setMouseIn] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);

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

  const handleMouseEnter = useCallback(() => {
    setMouseIn(true);
  }, [setMouseIn]);

  const handleMouseLeave = useCallback(() => {
    setMouseIn(false);
  }, [setMouseIn]);

  const changeSliderOpen = useCallback(() => {
    setSliderOpen(!sliderOpen);
  }, [sliderOpen, setSliderOpen]);

  return (
    <div className={classNames(styles["slider-wrapper"])}>
      <div className={classNames(styles["slider-track"])}>
        {props.map((sliderItem: SliderItemPropsType, index: number) => {
          return (
            <>
              {activeIndex === index && (
                <SliderItem
                  sliderItem={sliderItem}
                  open={false}
                  setOpen={changeSliderOpen}
                />
              )}
              {sliderOpen && activeIndex === index && (
                <SliderItem
                  sliderItem={sliderItem}
                  open
                  setOpen={changeSliderOpen}
                />
              )}
            </>
          );
        })}
        {activeIndex > 0 && (
          <div
            className={classNames(styles["button-wrapper-left"], {
              [styles["button-wrapper-hover"]]: mouseIn,
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles["left"]}
              type={"button"}
              onClick={handleLeftButton}
            >
              {"<-"}
            </button>
          </div>
        )}
        {activeIndex < numItems - 1 && (
          <div
            className={classNames(styles["button-wrapper-right"], {
              [styles["button-wrapper-hover"]]: mouseIn,
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles["right"]}
              type={"button"}
              onClick={handleRightButton}
            >
              {"->"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
