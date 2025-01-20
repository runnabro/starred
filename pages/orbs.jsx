import Code from "/components/Code";
import Flex from "/components/Flex";
import Orb from "/components/Orb";
import Preview from "/components/Preview";

import { orbHtml, orbJsx, orbScss } from "/pages/orbCode";

import styles from "/styles/Orbs.module.scss";

const Orbs = () => {
  const orbHtmlTabs = [
    {
      code: orbHtml,
      language: "html",
      name: "HTML",
    },
    {
      code: orbJsx,
      name: "JSX",
      language: "jsx",
    },
  ];

  const orbScssTabs = [
    {
      code: orbScss,
      language: "scss",
      name: "SCSS",
    },
  ];

  return (
    <>
      <article className={styles.Orbs}>
        <Preview>
          <Flex gap="2em">
            <Flex align="center" gap="1em" layout="column">
              <Orb />
              <figcaption className={styles["Orbs-caption"]}>Blob</figcaption>
            </Flex>
            <Flex align="center" gap="1em" layout="column">
              <Orb kind="spinner" />
              <figcaption className={styles["Orbs-caption"]}>
                Spinner
              </figcaption>
            </Flex>
          </Flex>
        </Preview>
        <Preview dark>
          <Flex gap="2em">
            <Flex align="center" gap="1em" layout="column">
              <Orb />
              <figcaption className={styles["Orbs-caption"]}>Blob</figcaption>
            </Flex>
            <Flex align="center" gap="1em" layout="column">
              <Orb kind="spinner" />
              <figcaption className={styles["Orbs-caption"]}>
                Spinner
              </figcaption>
            </Flex>
          </Flex>
        </Preview>
        <Code code={orbHtmlTabs} />
        <Code code={orbScssTabs} />
      </article>
    </>
  );
};

export default Orbs;
