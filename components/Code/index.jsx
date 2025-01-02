import { useEffect, useState } from "react";
import { Check, CodeXml, Copy } from "lucide-react";
import { Highlight, Prism, themes } from "prism-react-renderer";
import clsx from "clsx";

(typeof global !== "undefined" ? global : window).Prism = Prism;

await import("prismjs/components/prism-scss");

import Flex from "/components/Flex";
import styles from "./style.module.scss";

const Code = ({ className, code, label, language, lineNumbers = false }) => {
  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    if (!copied) {
      setCopied(true);
      navigator.clipboard.writeText(code);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

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
          {label}
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
      <Highlight code={code} language={language} theme={themes.github}>
        {({ getLineProps, getTokenProps, style, tokens }) => (
          <pre className={styles["Code-highlight"]} style={style}>
            {tokens.map((line, i) => (
              <figure key={i} {...getLineProps({ line })}>
                {lineNumbers && (
                  <span className={styles["Code-linenumber"]}>{i + 1}</span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </figure>
            ))}
          </pre>
        )}
      </Highlight>
    </figure>
  );
};

export default Code;
