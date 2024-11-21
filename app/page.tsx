"use client";

import StickyHeader from "./components/sticky-header";
import AboutMe from "./components/about-me-scroller";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import ContactLinks from "./components/contact-links";
import ProjectCards from "./components/project-cards";
import HeroDivider from "./components/hero-divider";
import { useDarkMode } from "./hooks/use-dark-mode";

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="relative">
      <button className="sticky top-0" onClick={toggleDarkMode}>
        Here
      </button>
      <div className="dark:bg-black">
        <StickyHeader />
        <HeroDivider />
        <AboutMe />
        <ProjectCards />
      </div>

      <ContactLinks />
    </div>
  );
}
