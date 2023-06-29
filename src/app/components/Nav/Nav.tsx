"use client";

import NavItem from "@components/Nav/NavItem";
import styles from "@components/Nav/styles.module.css";

const items = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Badminton",
    link: "/badminton",
  },
  {
    text: "Cooking",
    link: "/cooking",
  },
];

const Nav = () => {
  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-content"]}>
        {items.map((item, index) => {
          return <NavItem key={index} text={item.text} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default Nav;
