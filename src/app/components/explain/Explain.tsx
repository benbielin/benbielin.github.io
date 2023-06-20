import { ReactNode } from "react";
import styles from "@components/explain/styles.module.css";
import classNames from "classnames";

const Explain = ({x, y, children} : {x: number, y: number, children: ReactNode}) => {
  return (
    <div 
      className={classNames(styles["explain"])}
      style={{
        left: x,
        top: y,
        transform: "translateX(-50%) translateY(-50%)",
      }}
    >
      {children}
    </div>
  );
};

export default Explain;