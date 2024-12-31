import Head from "next/head";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Tippy from "@tippyjs/react";

import Footer from "/components/Footer";
import Flex from "../components/Flex";
import Gradient from "../components/Gradient";
import Jumping from "../components/Jumping";
import LinkItem from "../components/LinkItem";
import Orb from "../components/Orb";

import styles from "/styles/Home.module.scss";

const links = [
  {
    children: (
      <>
        <Jumping className={styles["Main-list-preview"]}>Hello World</Jumping>
      </>
    ),
    description: "It’s text & it jumps.",
    href: "",
    title: "Jumping Text",
  },
  {
    children: (
      <Flex gap="1em" justify="center">
        <Orb kind="blob" />
        <Orb kind="spinner" />
      </Flex>
    ),
    description: "Just orbs.",
    href: "",
    title: "CSS Orbs",
  },
  {
    description: "A flight emissions calculator",
    href: "https://offset.tonyli.com",
    title: "Flight CO2 Calculator",
  },
  {
    children: (
      <Flex gap="1em" justify="center">
        <Gradient>Gradient</Gradient>
      </Flex>
    ),
    href: "",
    title: "Gradient Text",
  },
];

const work = [
  {
    alt: "ReadMe’s Owlbert",
    background: "#018ef5",
    href: "//readme.com",
    label: "ReadMe",
    src: "/readme-owl.png",
    srcBadge: "/readme-badge.svg",
  },
  {
    alt: "Salesforce’s Saasy",
    background: "#fff",
    border: true,
    href: "//salesforce.com",
    label: "Salesforce",
    src: "/salesforce.png",
    srcBadge: "/salesforce-badge.svg",
  },
  {
    alt: "MuleSoft’s Muley",
    background: "#479fda",
    href: "//mulesoft.com",
    label: "MuleSoft",
    src: "/mulesoft-mule.png",
    srcBadge: "/mulesoft-badge.svg",
  },
  {
    alt: "Runnable’s bear",
    background: "#c7aecf",
    href: "//runnable.com/landing",
    label: "Runnable",
    src: "/runnable-bear.png",
    srcBadge: "/runnable-badge.svg",
  },
];

const HomeWork = () => {
  return (
    <ol className={styles["HomeWork"]}>
      {work.map(({ alt, background, border, href, label, src, srcBadge }) => (
        <li key={src}>
          <Tippy
            content={
              <>
                {label}
                <ArrowUpRight className={styles["HomeWork-arrow"]} size={12} />
              </>
            }
            placement="bottom"
          >
            <a
              className={styles["HomeWork-link"]}
              href={href}
              rel="noopener"
              target="_blank"
            >
              <Image alt={alt} height={70} priority src={src} width={70} />
              <Image
                alt={`${label} logo`}
                className={`${styles["HomeWork-badge"]} ${styles["HomeWork-badge_border"]}`}
                height={25}
                priority
                src={srcBadge}
                style={{ background }}
                width={25}
              />
            </a>
          </Tippy>
        </li>
      ))}
    </ol>
  );
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Hi.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.Home}>
        <main className={styles.Main}>
          <h1 className={styles["Main-heading"]}>
            I’m Tony. I build for the{" "}
            <Gradient className={styles["Main-heading-web"]}>web</Gradient> &
            this is my journey, so far.
          </h1>
          <HomeWork />
          <ul className={styles["Main-list"]}>
            {links.map(({ children, description, href, title }) => (
              <li key={href}>
                <LinkItem description={description} href={href} title={title}>
                  {children}
                </LinkItem>
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
