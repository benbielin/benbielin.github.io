"use client";

import { Fragment } from "react";

import { InfoPropsType } from "@/app/types";
import InfoCard from "./InfoCard";

import styles from "@components/Info/styles.module.css";

const Info = ({ props }: { props: InfoPropsType }) => {
  return (
    <div className={styles["info-wrapper"]}>
      {props.title}
      {props.infoRows.map((infoRow) => {
        return (
          <Fragment key={infoRow.title}>
            <div className={styles['info-row-title']}>{infoRow.title}</div>
            <div
              className={styles['info-row']}
            >
              {infoRow.infoCards.map((infoCard) => {
                return <InfoCard key={infoCard.title} infoCard={infoCard} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Info;
