import clsx from "clsx";

import Flex from "/components/Flex";
import styles from "./style.module.scss";

const Preview = ({ className, children, dark, light }) => {
  return (
    <Flex
      align="center"
      className={clsx(
        styles.Preview,
        dark && styles["Preview_dark"],
        light && styles["Preview_light"],
        className
      )}
      justify="center"
      tag="figure"
    >
      {children}
    </Flex>
  );
};

export default Preview;
