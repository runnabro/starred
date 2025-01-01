import clsx from "clsx";
import { Highlight, themes } from "prism-react-renderer";

import Orb from "/components/Orb";

import styles from "/styles/Orbs.module.scss";

const Orbs = () => {
  const orbHtml = `<div class="Orb-spinner">
  <div class="Orb-spinner-child" />
</div>`;

  return (
    <>
      <article className={styles.Orbs}>
        <div className={styles["Orbs-preview"]}>
          <Orb />
          <Orb kind="spinner" />
        </div>
        <div className={clsx(styles["Orbs-preview"], "dark")}>
          <Orb />
          <Orb kind="spinner" />
        </div>
        Markup
        <Highlight code={orbHtml} language="html" theme={themes.github}>
          {({ getLineProps, getTokenProps, style, tokens }) => (
            <pre style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        CSS
        <pre></pre>
      </article>
    </>
  );
};

export default Orbs;
