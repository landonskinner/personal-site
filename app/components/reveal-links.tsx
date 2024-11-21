import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
const font = Space_Grotesk({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export const RevealLinks = () => {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      className={`${font.className} grid place-content-center gap-2 bg-indigo-500 px-8 py-24 text-black h-screen`}
    >
      <FlipLink href="#">Resume</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">GitHub</FlipLink>
      <FlipLink href="#">Contact</FlipLink>
    </section>
  );
};

const DURATION = 0.4;
const STAGGER = 0.04;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black  text-7xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
        letterSpacing: "-0.05em",
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
