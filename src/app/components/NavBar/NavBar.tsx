"use client";

import { items } from "@/app/data/data";

import Link from "next/link";

import styles from "@components/NavBar/styles.module.css";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "45%",
        marginRight: "5%",
        alignItems: "center",
        backgroundColor: "#404040",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      {items.map((item) => {
        return (
          <div
            key={item.text}
            style={{
              display: "flex",
              margin: "0 auto",
            }}
          >
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
