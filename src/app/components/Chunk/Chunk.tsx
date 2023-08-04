'use client';

import { ReactNode } from "react";
import styles from "@components/Chunk/styles.module.css";

const Chunk = ({ children }: { children: ReactNode }) => {
  return <div className={styles["chunk"]}>{children}</div>;
};

export default Chunk;
