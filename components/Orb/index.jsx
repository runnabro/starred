import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import useOnScreen from "../../hooks/useOnScreen";

import styles from "./style.module.scss";

const Orb = ({ children, className, kind = "blob", speed = 50 }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  const Blob = ({ kind }) => {
    console.log(kind);
    if (kind === "spinner") {
      return (
        <div className={styles["Orb-spinner"]}>
          <div className={styles["Orb-spinner-child"]} />
        </div>
      );
    }

    if (kind === "blob") {
      return (
        <div className={styles["Orb-blob"]}>
          <div className={styles["Orb-blob-green"]} />
          <div className={styles["Orb-blob-yellow"]} />
          <div className={styles["Orb-blob-red"]} />
        </div>
      );
    }
  };

  return (
    <div
      className={clsx(styles.Orb, isOnScreen && styles.Orb_onScreen)}
      ref={ref}
    >
      <Blob kind={kind} />
    </div>
  );
};

export default Orb;
