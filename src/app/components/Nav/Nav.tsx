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
  {
    text: "Memes",
    link: "/memes",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const Nav = () => {
  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-content"]}>
        {items.map((item) => {
          return <NavItem key={item.text} text={item.text} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default Nav;
