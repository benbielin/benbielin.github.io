"use client";

import { ReactNode, useCallback, useState } from "react";
import classNames from "classnames";
import SliderItem from "@components/Slider/SliderItem";
import { SliderItemPropsType } from "@/app/types";

import styles from "@components/Slider/styles.module.css";

const Slider = ({
  items,
  open,
  setOpen,
  activeIndex,
  handleRightButton,
  handleLeftButton,
}: {
  items: Array<SliderItemPropsType>;
  open: boolean;
  setOpen: () => void;
  activeIndex: number;
  handleRightButton: () => void;
  handleLeftButton: () => void;
}) => {
  const numItems = items.length;
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setMouseIn(true);
  }, [setMouseIn]);

  const handleMouseLeave = useCallback(() => {
    setMouseIn(false);
  }, [setMouseIn]);

  return (
    <div className={classNames(styles["slider-wrapper"])}>
      <div className={classNames(styles["slider-track"])}>
        {items.map((sliderItem: SliderItemPropsType, index: number) => {
          return (
            <>
              {activeIndex === index && (
                <SliderItem
                  sliderItem={sliderItem}
                  open={open}
                  setOpen={setOpen}
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
