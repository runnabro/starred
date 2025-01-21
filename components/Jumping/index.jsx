import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import useOnScreen from "../../hooks/useOnScreen";

import classes from "./style.module.scss";

const Jumping = ({ children, className, speed = 50 }) => {
  const ref = useRef();
  const [reverse, setReverse] = useState(false);
  const [animating, setAnimating] = useState(false);
  const isOnScreen = useOnScreen(ref);

  const text = children.split("");
  const timerLengthS = `${(text.length - 1) * 0.1}s`;

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
              key={`Jumping-${i}`}
              onAnimationEnd={() => reverseAnimation()}
              style={{
                animationDelay: reverse
                  ? `${text.length * 0.1 - 0.1 * i - 0.09}s`
                  : `${0.1 * i}s`,
                animationDuration: timerLengthS,
              }}
            >
              {letter}
            </span>
          );
        }
        return (
          <span
            key={`Jumping-${i}`}
            style={{
              animationDelay: reverse
                ? `${text.length * 0.1 - 0.1 * i - 0.09}s`
                : `${0.1 * i}s`,
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

export default Jumping;
