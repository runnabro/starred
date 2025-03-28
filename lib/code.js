export const orbHtml = `<div class="Orb-blob">
  <div class="Orb-blob-green"></div>
  <div class="Orb-blob-yellow"></div>
  <div class="Orb-blob-red"></div>
</div>

<div class="Orb-spinner">
  <div class="Orb-spinner-child"></div>
</div>`;

export const orbJsx = `import React, { useRef } from "react";
import clsx from "clsx";

import useOnScreen from "../../hooks/useOnScreen";

import styles from "./style.module.scss";

const Orb = ({ children, className, kind = "blob", speed = 50 }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  const Blob = ({ kind }) => {
    if (kind === "spinner") {
      return (
        <div className={styles["Orb-spinner"]}>
          <div className={styles["Orb-spinner-child"]} />
        </div>
      );
    }

    if (kind === "blob") {
      return (
        <div className={styles["Orb-blob"]}>
          <div className={styles["Orb-blob-green"]} />
          <div className={styles["Orb-blob-yellow"]} />
          <div className={styles["Orb-blob-red"]} />
        </div>
      );
    }
  };

  return (
    <div
      className={clsx(styles.Orb, isOnScreen && styles.Orb_onScreen)}
      ref={ref}
    >
      <Blob kind={kind} />
    </div>
  );
};

export default Orb;`

export const orbScss = `.Orb {
  --Orb-shadow: #{inset 0 -1px 0.5em rgba(black, 0.15),
    inset 0 1px 1em rgba(white, 0.75), 0 1em 3em rgba(black, 0.05)};
  --Orb-size: 35px;

  --green: #12ca93;
  --yellow: #f7c543;
  --red: #e95f6a;

  &:global(.dark) {
    --Orb-shadow: #{inset 0 -1px 2em rgba(black, 0.1),
      inset 0 1px 0.5em rgba(white, 0.3), inset 0 -1px 0.5em rgba(white, 0.1),
      0 1em 3em rgba(black, 0.1)};
  }

  &-blob,
  &-spinner {
    border: 1px solid rgba(black, 0.1);
    border-left-color: rgba(black, 0.075);
    border-right-color: rgba(black, 0.075);
    border-top-color: rgba(black, 0.05);
    border-radius: var(--Orb-size);
    box-shadow: var(--Orb-shadow);
    height: var(--Orb-size);
    width: var(--Orb-size);
  }

  &-blob {
    box-sizing: content-box;
    isolation: isolate;
    font-size: 2.5px;
    position: relative;

    &-green,
    &-yellow,
    &-red {
      border-radius: 50%;
      bottom: 0;
      filter: blur(2.5em) contrast(3);
      height: 5em;
      left: 0;
      margin: auto;
      mix-blend-mode: screen;
      position: absolute;
      right: 0;
      top: 0;
      width: 5em;
    }

    &-green {
      animation: green-blob 2.5s ease-in-out infinite;
      background: var(--green);

      @keyframes green-blob {
        0%,
        100% {
          transform: translate(0.5em, -0.5em) scale(0.875, 1);
        }
        33% {
          transform: translate(1.25em, -1em) scale(0.75, 0.875);
        }
        67% {
          transform: translate(-0.5em, -0.5em) scale(1.125, 0.875);
        }
      }
    }

    &-yellow {
      animation: yellow-blob 2.5s linear infinite;
      background: var(--orange);

      @keyframes yellow-blob {
        0%,
        100% {
          transform: translate(2em, 1em) scale(1.125, 0.875);
        }
        33% {
          transform: translate(-1em, -0.5em) scale(1, 1);
        }
        67% {
          transform: translate(1em, 2em) scale(0.75, 0.875);
        }
      }
    }

    &-red {
      animation: red-blob 2.5s linear infinite;
      background: var(--red);

      @keyframes red-blob {
        0%,
        100% {
          transform: translate(1.75em, 1em) scale(1, 1);
        }
        25% {
          transform: translate(-0.75em, 2em) scale(0.75, 1);
        }
        50% {
          transform: translate(2em, 0) scale(0.7, 0.7);
        }
        75% {
          transform: translate(1.5em, -2em) scale(0.875, 0.875);
        }
      }
    }
  }

  &-spinner {
    --color-1: var(--yellow);
    --color-2: var(--green);
    --color-3: var(--red);
    --color-4: var(--green);
    --color-5: var(--red);
    --scale: 5em;

    align-items: center;
    display: flex;
    font-size: 2px;
    justify-content: center;
    overflow: hidden;

    &-child {
      border-right: var(--scale) solid transparent;
      border-top: var(--scale) solid var(--color-1);
      border-left: var(--scale) solid transparent;
      border-bottom: var(--scale) solid var(--color-4);
      border-radius: var(--scale);
      filter: blur(3em) contrast(3);
      position: relative;
      height: 0;
      width: 0;

      &::before,
      &::after {
        animation: spin linear infinite;
        border-radius: var(--scale);
        bottom: 0;
        content: "";
        height: 0;
        left: calc(var(--scale) * -1);
        right: 0;
        position: absolute;
        top: calc(var(--scale) * -1);
        width: 0;
      }

      &::after {
        border-right: var(--scale) solid transparent;
        border-top: var(--scale) solid var(--color-2);
        border-left: var(--scale) solid transparent;
        border-bottom: var(--scale) solid var(--color-5);
        animation-duration: 3s;
        mix-blend-mode: color;

        :global(.dark) {
          mix-blend-mode: color-burn;
        }
      }

      &::before {
        border-right: var(--scale) solid transparent;
        border-top: var(--scale) solid var(--color-1);
        border-left: var(--scale) solid transparent;
        border-bottom: var(--scale) solid var(--color-3);
        animation-duration: 4s;
        mix-blend-mode: exclusion;
      }
    }

    @keyframes spin {
      0% {
        transform: none;
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}`;

export const jumpingJsx = `import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import useOnScreen from "../../hooks/useOnScreen";

import classes from "./style.module.scss";

const Jumping = ({ children, className, speed = 50 }) => {
  const ref = useRef();
  const [reverse, setReverse] = useState(false);
  const [animating, setAnimating] = useState(false);
  const isOnScreen = useOnScreen(ref);

  const text = children.split("");
  const timerLengthS = \`\${(text.length - 1) * 0.1}s\`\;

  const reverseAnimation = () => {
    setAnimating(false);

    const timer = setTimeout(() => {
      setAnimating(true);
      setReverse(!reverse);
    }, speed);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    setAnimating(true);
  }, []);

  return (
    <span
      className={clsx(
        classes.Jumping,
        animating && classes.Jumping_animation,
        isOnScreen && classes.Jumping_onScreen,
        className
      )}
      ref={ref}
    >
      {text.map((letter, i) => {
        if (letter.trim() === "") return " ";
        if (reverse ? i === 0 : text.length - 1 === i) {
          return (
            <span
              key={\`\Jumping-\${i}\`\}
              onAnimationEnd={() => reverseAnimation()}
              style={{
                animationDelay: reverse ? \`\${text.length * 0.1 - 0.1 * i - 0.09}s\`\ : \`\${0.1 * i}s\`\,
                animationDuration: timerLengthS,
              }}
            >
              {letter}
            </span>
          );
        }
        return (
          <span
            key={\`\Jumping-\${i}\`\}
            style={{
              animationDelay: reverse ? \`\${text.length * 0.1 - 0.1 * i - 0.09}s\`\ : \`\${0.1 * i}s\`\,
              animationDuration: timerLengthS,
            }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default Jumping;`;

export const jumpingScss = `.Jumping {
  $block: &;

  white-space: nowrap;

  &_animation span {
    animation: jump 1s alternate;
  }

  span {
    animation-play-state: paused;
    display: inline-block;
  }

  &_onScreen span {
    animation-play-state: running;

    @media (prefers-reduced-motion) {
      animation-play-state: paused;
    }
  }

  @keyframes jump {
    0% {
      transform: none;
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: none;
    }
  }
}`;

export const gradientJsx = `import clsx from "clsx";

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
        backgroundImage: \`\linear-gradient(135deg, \${gradient})\`\,
        backgroundSize: \`\${colors.length * 66}% 100%\`\,
      }}
    >
      {children}
    </Tag>
  );
};

export default Gradient;`;

export const gradientScss = `.Gradient {
  animation: gradient 5s infinite linear;
  display: inline-block;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 100% 0;
    }
  }
}`;
