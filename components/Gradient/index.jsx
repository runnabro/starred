import clsx from "clsx";

import styles from "./style.module.scss";

const Gradient = ({
  children,
  className,
  colors = [
    "var(--purple)",
    "var(--blue)",
    "var(--green)",
    "var(--orange)",
    "var(--red)",
  ],
  tag: Tag = "span",
}) => {
  const gradient = Array(2).fill(colors).flat().join(", ");
  return (
    <Tag
      className={clsx(styles.Gradient, className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient})`,
        backgroundSize: `${colors.length * 66}% 100%`,
      }}
    >
      {children}
    </Tag>
  );
};

export default Gradient;
