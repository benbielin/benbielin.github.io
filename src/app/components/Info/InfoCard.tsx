import { InfoCardPropsType } from "@/app/types";

import styles from "@components/Info/styles.module.css";

const InfoCard = ({infoCard}:{infoCard: InfoCardPropsType}) => {
  return (
    <div
      className={styles['info-card-wrapper']}
    >
      <div className={styles['info-card-title']}>
      {infoCard.title}
      </div>
      <ul
        style={{
          fontSize: "12px",
          display: "block",
          listStyleType: "disc",
          textAlign: "left",
          paddingInlineStart: "24px",
        }}
      >
        {infoCard.descriptions.map((description) => {
          return <li key={infoCard.title}>{description}</li>;
        })}
      </ul>
    </div>
  );
};

export default InfoCard;
