import { forwardRef } from "react";

import clsx from "clsx";

import styles from "./style.module.scss";

const Flex = (
  {
    align = "flex-start",
    basis = "auto",
    className,
    gap,
    grow = 0,
    justify = "flex-start",
    layout = "row",
    shrink = 1,
    style,
    tag: Tag = "div",
    wrap,
    ...props
  },
  ref,
) => {
  return (
    <Tag
      {...props}
      className={clsx(styles.Flex, className)}
      ref={ref}
      style={{
        "--flex-align": align,
        "--flex-basis": basis,
        "--flex-gap": gap,
        "--flex-grow": grow,
        "--flex-justify": justify,
        "--flex-layout": layout,
        "--flex-shrink": shrink,
        ...(wrap && { "--flex-wrap": "wrap" }),
        ...style,
      }}
    >
      {props.children}
    </Tag>
  );
};

export default forwardRef(Flex);
