"use client";

import { ReactNode, useCallback, useState } from "react";
import classNames from "classnames";

import styles from "@components/Click/styles.module.css";

const Click = ({
  children,
  handleOnClick,
  pointer,
  style,
}: {
  children: ReactNode;
  handleOnClick?: () => void;
  pointer: boolean;
  style? : object;
}) => {
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setMouseIn(true);
  }, [setMouseIn]);

  const handleMouseExit = useCallback(() => {
    setMouseIn(false);
  }, [setMouseIn]);

  return (
    <div
      style={style}
      className={classNames(styles["click"], {
        [styles["click-mouse-in"]]: mouseIn && pointer,
      })}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      {children}
    </div>
  );
};

export default Click;
