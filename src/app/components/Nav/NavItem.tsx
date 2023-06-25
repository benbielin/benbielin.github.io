"use client";

import styles from "@components/Nav/styles.module.css";

const NavItem = ({ text, link }: { text: string; link: string }) => {
  return <div className={styles["nav-item"]}>
    {text }
  </div>;
};

export default NavItem;
