"use client";

import { ReactNode } from "react";
import classNames from "classnames";

import MemeImage from "./meme_image";
import MemeList from "./meme_list";

import { MemeListPropsType } from "@/app/types";

import styles from "@components/Meme/styles.module.css";

const Meme = ({
  image,
  list,
  title,
  type,
}: {
  image?: ReactNode,
  list?: MemeListPropsType,
  title: string;
  type: "image" | "list",
}) => {
  return (
    <div className={classNames(styles["meme-wrapper"])}>
        <div className={styles["title"]}>{title}</div>
        {type === "image" ? <MemeImage image={image}/> : <MemeList list={list}/> }
    </div>
  );
};

export default Meme;
