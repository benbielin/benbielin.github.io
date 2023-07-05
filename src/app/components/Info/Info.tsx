"use client";

import { InfoCardPropsType } from "@/app/types";

const Info = ({
  infoCards,
  title,
}: {
  infoCards: InfoCardPropsType[];
  title: string;
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        border: '4px solid #ff8e8e',
        borderRadius: '12px',
      }}
    >
      <div
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "justify",
        }}
      >
        {infoCards.map((infoCard) => {
          return (
            <div
              style={{
                textAlign: "center",
                marginBottom: "8px",
                backgroundColor: '#ff8e8e',
              }}
              key={infoCard.title}
            >
              {infoCard.title}
              <ul>
                {infoCard.description.map((description) => {
                  return <li key={description}>{description}</li>
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
