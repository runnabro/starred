import Link from "next/link";

import styles from "./index.module.scss";

const LinkItem = ({ children, description, href, title }) => (
  <Link className={styles.LinkItem} href={href}>
    {children && (
      <figure className={styles["LinkItem-preview"]}>{children}</figure>
    )}
    <div className={styles["LinkItem-title"]}>{title}</div>
    <div className={styles["LinkItem-description"]}>{description}</div>
  </Link>
);

export default LinkItem;
