"use client";

import { navBarItems } from "@/app/data/data";

import NavItem from "@components/Nav/NavItem";
import styles from "@components/Nav/styles.module.css";

const Nav = () => {
  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-content"]}>
        {navBarItems.map((item) => {
          return <NavItem key={item.text} text={item.text} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default Nav;
