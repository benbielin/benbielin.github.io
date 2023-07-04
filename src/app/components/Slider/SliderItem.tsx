"use client";

import { ReactNode, useMemo } from "react";
import { SliderItemPropsType } from "@/app/types";
import Click from "@components/Click/Click";
import { OPEN_RATIO, OPEN_HEIGHT, OPEN_WIDTH } from "@components/Slider/Slider";
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
  const height = sliderItem.image.height;
  const width = sliderItem.image.width;
  const aspectRatio = height / width;

  const renderHeight =
    aspectRatio > OPEN_RATIO ? OPEN_HEIGHT : (height / width) * OPEN_WIDTH;
  const renderWidth =
    aspectRatio > OPEN_RATIO ? (width / height) * OPEN_HEIGHT : OPEN_WIDTH;

  const CLICK_STYLES = useMemo(() => {
    return open ? {
      height: "fit-content",
      width: "fit-content",
    } : {
      height: "100%",
      width: "100%",
    }
  }, [open])

  return (
      <Click 
        handleOnClick={!open ? setOpen : undefined}
        pointer={!open}
        style={CLICK_STYLES}
      >
        <Image
          className={classNames(open ? styles["image-open"] : styles["image"])}
          src={sliderItem.image.imageUrl}
          alt={sliderItem.text}
          fill={!open}
          height={open ? renderHeight : undefined}
          width={open ? renderWidth : undefined}
        />
      </Click>
  );
};

export default SliderItem;
