"use client";

import { Fragment } from "react";

import { InfoPropsType } from "@/app/types";
import InfoCard from "./InfoCard";

const Info = ({ props }: { props: InfoPropsType }) => {
  return (
    <div
      style={{
        textAlign: "center",
        border: "4px solid #ff8e8e",
        backgroundColor: "#242424",
        borderRadius: "12px",
        margin: "2px 36px 0px 36px",
      }}
    >
      {props.title}
      {props.infoRows.map((infoRow) => {
        return (
          <Fragment key={infoRow.title}>
            <div>{infoRow.title}</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                textAlign: "justify",
              }}
            >
              {infoRow.infoCards.map((infoCard) => {
                return (
                  <InfoCard key={infoCard.title} infoCard={infoCard}/>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Info;
