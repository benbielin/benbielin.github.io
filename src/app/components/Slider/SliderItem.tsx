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
  const openHeight: number = window.innerHeight * 0.8;
  const openWidth: number = window.innerWidth * 0.6;
  const openRatio = openHeight / openWidth;

  const height = sliderItem.image.height;
  const width = sliderItem.image.width;
  const aspectRatio = height / width;

  const renderHeight =
    aspectRatio > openRatio ? openHeight : (height / width) * openWidth;
  const renderWidth =
    aspectRatio > openRatio ? (width / height) * openHeight : openWidth;

  return (
    <div
      className={classNames(
        open ? styles["slider-item-open"] : styles["slider-item"]
      )}
      style={{
        height: open ? openHeight : "100%",
        width: open ? openWidth : "100%",
      }}
    >
      <Click handleOnClick={setOpen}>
        <Image
          className={classNames(open ? styles["image-open"] : styles["image"])}
          src={sliderItem.image.imageUrl}
          alt={sliderItem.text}
          fill={!open}
          height={open ? renderHeight : undefined}
          width={open ? renderWidth : undefined}
        />
      </Click>
    </div>
  );
};

export default SliderItem;
