"use client";

import { ReactNode } from "react";
import { SliderItemPropsType } from "@/app/types";
import Click from "@components/Click/Click";
import Image from "next/image";
import classNames from "classnames";
import styles from "@components/Slider/styles.module.css";

const SliderItem = ({
  sliderItem,
  open,
  setOpen,
}: {
  sliderItem: SliderItemPropsType;
  open: boolean;
  setOpen?: () => void;
}) => {
  const openHeight : number = window.innerHeight * 0.8;
  const openWidth : number = window.innerWidth * 0.6;
  return (
    <Click handleOnClick={setOpen}>
      {open ? (
        <div
          style={{
            zIndex: "1030",
            display: "flex",
            position: "fixed",
            left: "50%",
            top: "10%",
            transform: "translateX(-50%)",
            height: openHeight,
            width: openWidth,
            backgroundColor: '#202020',
            alignItems: "center",
          }}
        >
          <Image
            className={classNames(styles["slider-item-open"])}
            src={sliderItem.imageUrl}
            alt={sliderItem.text}
            fill={true}
          />
        </div>
      ) : (
        <div
          className={classNames({
            [styles["blur"]]: open,
          })}
        >
          <Image
            className={classNames(styles["slider-item"], {
              [styles["blur"]]: open,
            })}
            fill={true}
            src={sliderItem.imageUrl}
            alt={sliderItem.text}
          />
        </div>
      )}
    </Click>
  );
};

export default SliderItem;
