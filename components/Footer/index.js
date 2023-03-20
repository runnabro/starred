
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

import styles from './index.module.scss';

const Footer = () => (
  <footer className={styles["Footer"]}>
    <a className={styles["Footer-link"]} href="//offset.tonyli.com">
      A flight emissions calculator
      <ArrowRight className={styles["Footer-link-arrow"]} size="12" />
    </a>
    <Link className={styles["Footer-link"]} href="/orbs">
      CSS Orbs
      <ArrowRight className={styles["Footer-link-arrow"]} size="12" />
    </Link>
  </footer>
);

export default Footer;
