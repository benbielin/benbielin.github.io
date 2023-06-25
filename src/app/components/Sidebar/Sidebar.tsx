"use client";

import styles from "@components/Sidebar/styles.module.css";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  }

  return <>{open ? <div className={styles["sidebar-wrapper"]}><button onClick={handleClick}>{"click"}</button>{"asdf"}</div> : <div className={styles["sidebar-wrapper-closed"]}><button onClick={handleClick}>{"click"}</button>{"asdf"}</div>}
  </>;
};

export default Sidebar;
