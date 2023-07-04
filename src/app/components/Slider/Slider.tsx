"use client";

import { Fragment, ReactNode, useCallback, useState } from "react";
import classNames from "classnames";
import SliderItem from "@components/Slider/SliderItem";
import { SliderItemPropsType } from "@/app/types";

import styles from "@components/Slider/styles.module.css";

export const OPEN_HEIGHT: number = window.innerHeight * 0.8;
export const OPEN_WIDTH: number = window.innerWidth * 0.6;
export const OPEN_RATIO = OPEN_HEIGHT / OPEN_WIDTH;

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

  const handleRightButtonClick = useCallback(() => {
    handleRightButton();
    setMouseIn(false);
  }, [handleRightButton, setMouseIn]);

  const handleLeftButtonClick = useCallback(() => {
    handleLeftButton();
    setMouseIn(false);
  }, [handleLeftButton, setMouseIn]);
  
  return (
    <div
      className={classNames(
        open ? styles["slider-item-open"] : styles["slider-item"]
      )}
      style={{
        height: open ? OPEN_HEIGHT : "100%",
        width: open ? OPEN_WIDTH : "100%",
      }}
    >
      <div className={classNames(styles["slider-track"])}>
        {items.map((sliderItem: SliderItemPropsType, index: number) => {
          return (
            <Fragment key={sliderItem.image.imageUrl}>
              {activeIndex === index && (
                <SliderItem
                  sliderItem={sliderItem}
                  open={open}
                  setOpen={setOpen}
                />
              )}
            </Fragment>
          );
        })}
        {activeIndex > 0 && (
          <div
            className={classNames(
              open
                ? styles["button-wrapper-left-open"]
                : styles["button-wrapper-left"],
              {
                [styles["button-wrapper-hover"]]: mouseIn,
              }
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button type={"button"} onClick={handleLeftButtonClick}>
              {"<-"}
            </button>
          </div>
        )}
        {activeIndex < numItems - 1 && (
          <div
            className={classNames(
              open
                ? styles["button-wrapper-right-open"]
                : styles["button-wrapper-right"],
              {
                [styles["button-wrapper-hover"]]: mouseIn,
              }
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button type={"button"} onClick={handleRightButtonClick}>
              {"->"}
            </button>
          </div>
        )}
        {open && (
          <div
            className={classNames(styles["close-button-wrapper"], {
              [styles["close-button-hover"]]: mouseIn,
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button type={"button"} onClick={setOpen} style={{
              margin: "0 auto",
              fontSize: "16px",
            }}>
              {'X'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
