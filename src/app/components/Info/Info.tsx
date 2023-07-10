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
        borderRadius: "12px",
        margin: "8px 12px 8px 12px",
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
