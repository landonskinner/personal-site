"use client";

import StickyHeader from "./components/sticky-header";
import AboutMe from "./components/about-me-scroller";
import ContactLinks from "./components/contact-links";
import ProjectCards from "./components/project-cards";
import { useDarkMode } from "./hooks/use-dark-mode";

export default function Home() {
  const { toggleDarkMode } = useDarkMode();
  return (
    <div className="relative">
      <button className="sticky top-0 z-30" onClick={toggleDarkMode}>
        Here
      </button>
      <div>
        <StickyHeader />
        <div className="bg-contain bg-repeat pt-[80vh] bg-decorative" />
        <AboutMe />
        <ProjectCards />
      </div>

      <ContactLinks />
    </div>
  );
}
