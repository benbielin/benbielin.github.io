"use client";

import classNames from "classnames";

import strings from "@components/helloEveryone/strings";
import styles from "@components/helloEveryone/styles.module.css";
import { useCallback, useEffect, useState } from "react";
import Explain from "@components/explain/Explain";

const HelloEveryone = () => {

  return (
    <h2
      className={classNames(styles["hello-everyone-container"])}
    >
      <div
        id={"hello-everyone-id"}
        className={classNames(styles["hello-everyone"])}
        title={strings.explain}
      >
        {strings.helloEveryone}
      </div>
    </h2>
  );
};

export default HelloEveryone;
