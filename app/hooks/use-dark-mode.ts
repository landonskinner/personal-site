import { useState, MouseEventHandler } from "react";
import { flushSync } from "react-dom";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (
      !e.target ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsDarkMode(!isDarkMode);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(!isDarkMode);
      });
    }).ready;

    isDarkMode
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");

    const { top, left, width, height } = (
      e.target as HTMLButtonElement
    ).getBoundingClientRect();

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${
            top + height / 2
          }px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return { isDarkMode, toggleDarkMode };
};
