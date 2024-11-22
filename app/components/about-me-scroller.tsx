"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import AnimatedCard from "./animated-card";
import { ABOUT_ME_CARDS } from "../data/about-me.data";

const AboutMe = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    useSpring(scrollYProgress, { stiffness: 250, damping: 50 }),
    [0, 1],
    ["1%", `-${(1 - 1 / ABOUT_ME_CARDS.length) * 100}%`]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex sm:mt-[20vh] mb-8">
          {ABOUT_ME_CARDS.map((card, i) => (
            <section
              key={i}
              className="p-4 min-h-[60vh] max-h-[80vh] w-[95vw] sm:w-96 overflow-hidden"
            >
              <AnimatedCard {...card} index={i} />
            </section>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
