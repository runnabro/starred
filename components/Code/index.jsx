import { useEffect, useState } from "react";
import { Check, CodeXml, Copy } from "lucide-react";
import { Highlight, Prism, themes } from "prism-react-renderer";
import clsx from "clsx";

(typeof global !== "undefined" ? global : window).Prism = Prism;

await import("prismjs/components/prism-scss");

import Flex from "/components/Flex";
import styles from "./style.module.scss";

const Code = ({ className, code, lineNumbers = false }) => {
  const [tab, setTab] = useState(code[0].name);
  const changeTab = (tabName) => {
    setTab(tabName);
  };

  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    if (!copied) {
      let copyCode = code.find(({ name }) => name === tab);

      console.log(copyCode);
      setCopied(true);
      navigator.clipboard.writeText(copyCode.code);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const [isDarkMode, setIsDarkMode] = useState();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);

    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <figure className={clsx(styles.Code, className)}>
      <Flex
        align="center"
        className={styles["Code-caption"]}
        gap="0.5em"
        justify="space-between"
        tag="figcaption"
      >
        <Flex align="center">
          <CodeXml className={styles["Code-caption-icon"]} />
          {code.length > 1 ? (
            <select
              className={styles["Code-caption-select"]}
              onChange={(e) => changeTab(e.target.value)}
            >
              {code.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          ) : (
            code[0].name
          )}
        </Flex>
        <button
          aria-label="Copy code"
          className={styles["Code-caption-copy"]}
          onClick={() => copyCode()}
          type="button"
        >
          {copied ? (
            <Check className={styles["Code-caption-icon"]} />
          ) : (
            <Copy className={styles["Code-caption-icon"]} />
          )}
        </button>
      </Flex>
      {code.map(({ code, language, name }) => {
        if (name === tab) {
          return (
            <Highlight
              key={name}
              code={code}
              language={language}
              theme={isDarkMode ? themes.dracula : themes.github}
            >
              {({ getLineProps, getTokenProps, style, tokens }) => (
                <pre className={styles["Code-highlight"]} style={style}>
                  {tokens.map((line, i) => (
                    <figure key={i} {...getLineProps({ line })}>
                      {lineNumbers && (
                        <span className={styles["Code-linenumber"]}>
                          {i + 1}
                        </span>
                      )}
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </figure>
                  ))}
                </pre>
              )}
            </Highlight>
          );
        }
      })}
    </figure>
  );
};

export default Code;
