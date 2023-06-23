import { ReactNode } from "react";
import styles from "@components/page/styles.module.css";

const Page = ({ children }: { children: ReactNode }) => {
  return <div className={styles["page"]}>{children}</div>;
};

export default Page;
