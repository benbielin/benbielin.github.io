"use client";

import classNames from "classnames";

import strings from "@/app/components/HelloEveryone/strings";
import styles from "@components/helloEveryone/styles.module.css";

const HelloEveryone = ({ access }: { access: boolean }) => {
  return (
    <h2 className={classNames(styles["hello-everyone-wrapper"])}>
      <div
        id={"hello-everyone-id"}
        className={classNames(styles["hello-everyone"])}
        title={access ? strings.explain : undefined}
      >
        {strings.helloEveryone}
      </div>
    </h2>
  );
};

export default HelloEveryone;
