"use client";

import { navBarItems } from "@/app/data/data";

import Link from "next/link";

import styles from "@components/NavBar/styles.module.css";

const NavBar = () => {
  return (
    <div className={styles["navbar-wrapper"]}>
      {navBarItems.map((item) => {
        return (
          <div key={item.text} className={styles["navbar-item-wrapper"]}>
            <Link href={item.link} className={styles["navbar-item"]}>
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
