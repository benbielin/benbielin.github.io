"use client";

import classNames from "classnames";

import strings from "@/app/components/HelloEveryone/strings";
import styles from "@components/HelloEveryone/styles.module.css";

const HelloEveryone = () => {
  return (
    <h2 className={classNames(styles["hello-everyone-wrapper"])}>
      <div
        className={classNames(styles["hello-everyone"])}
        title={strings.explain}
      >
        {strings.helloEveryone}
      </div>
    </h2>
  );
};

export default HelloEveryone;
