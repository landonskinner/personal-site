"use client";
import { motion } from "framer-motion";
import StickyHeader from "./components/sticky-header";
import { RevealBento } from "./components/about-me";
import Example from "./components/horizontal-scroller";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { RevealLinks } from "./components/reveal-links";
import Toggle from "./components/dark-mode-toggle";
import ProjectCards from "./components/project-cards";
import NewCards from "./components/project-cards-new";

export default function Home() {
  const ref = useRef(null);
  const toggleDarkMode = async (isDarkMode) => {
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsDarkMode(isDarkMode);
      return;
    }
    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDarkMode);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="relative" style={{ scrollSnapType: "y mandatory" }}>
      <button
        className="sticky top-0"
        ref={ref}
        onClick={() => toggleDarkMode(!isDarkMode)}
      >
        Here
      </button>
      <Toggle />
      <div>
        <StickyHeader />

        <div
          className={`bg-contain bg-repeat pt-[80vh] ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
          style={{ backgroundImage: "url('./background.svg')" }}
        >
          {/* <RevealBento /> */}
        </div>
        <Example />
        {/* <ProjectCards /> */}
        <NewCards />
      </div>

      <RevealLinks />
      {/* <RevealBento /> */}
    </div>
  );
}
