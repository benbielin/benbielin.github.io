import classNames from "classnames";

import strings from "@components/helloEveryone/strings";
import styles from "@components/helloEveryone/styles.module.css";
import { useCallback } from "react";

const HelloEveryone = () => {
  const explainHelloEveryone = useCallback(() => {
    return (
      <div>asdf</div>
    );
  }, []);
  return (
    <h2 className={classNames(styles['hello-everyone-container'])}>
      <div 
        className={classNames(styles['hello-everyone'])}
        onMouseEnter={explainHelloEveryone}
      >
        {strings.helloEveryone}
      </div>
    </h2>
  );
};

export default HelloEveryone;
