"use client";
import AnimatedCard from "./animated-card";
import { ABOUT_ME_CARDS } from "../data/about-me.data";
import useIsMobile from "../hooks/use-mobile";
import AboutMeDesktop from "./about-me-desktop";

const AboutMe = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="items-center overflow-hidden bg-background">
      <div className="grid grid-cols-1 mb-8">
        {ABOUT_ME_CARDS.map((card, i) => (
          <section
            key={i}
            className="p-4 min-h-[350px] max-h-[80vh] w-[95vw] sm:w-96 overflow-hidden"
          >
            <AnimatedCard {...card} index={i} />
          </section>
        ))}
      </div>
    </div>
  ) : (
    <AboutMeDesktop />
  );
};

export default AboutMe;
