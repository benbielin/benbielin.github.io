"use client";

import styles from "@components/Nav/styles.module.css";
import Link from "next/link";

const NavItem = ({ text, link }: { text: string; link: string }) => {
  return <Link href={link} className={styles["nav-item"]}>{text}</Link>;
};

export default NavItem;
