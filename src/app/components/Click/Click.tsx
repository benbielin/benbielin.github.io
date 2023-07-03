"use client";

import { ReactNode, useCallback, useState } from "react";
import classNames from "classnames";

import styles from "@components/Click/styles.module.css";

const Click = ({
  handleOnClick,
  children,
}: {
  handleOnClick?: () => void;
  children: ReactNode;
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
      className={classNames(styles["click"], {
        [styles["click-mouse-in"]]: mouseIn,
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
