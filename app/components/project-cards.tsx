"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Space_Grotesk } from "next/font/google";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { PROJECTS } from "../data/project-cards.data";
const font = Space_Grotesk({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const WrappingTitle = ({
  title,
  isInView,
}: {
  title: string;
  isInView: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-24 -24 500 320"
      className="absolute max-w-screen sm:w-[500px] z-0 -top-5 -left-5 sm:-top-8 sm:-left-8"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        id="titlePath"
        className="fill-none"
        d="m1,318.34693c0.64202,-205.08236 -0.48943,-218.79824 -0.76907,-259.51999c0.57604,-21.39773 9.56603,-34.269 17.04267,-40.92079c7.47664,-6.65179 10.9603,-13.79357 39.24741,-17.80961l442.21024,0.42499"
      />
      <text>
        <motion.textPath
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "bounce",
          }}
          animate={{
            startOffset: isInView ? "44%" : "3%",
          }}
          href="#titlePath"
          className={`fill-background text-3xl uppercase ${font.className}`}
        >
          {title}
        </motion.textPath>
      </text>
    </svg>
  );
};

const PROJECT_ICONS = {
  GitHub: FaGithub,
  Demo: FaYoutube,
  Deployment: IoLogoVercel,
};

const ExpandedCard = ({
  description,
  links,
  index,
}: (typeof PROJECTS)[number] & { index: number }) => {
  return (
    <motion.div
      key={`card-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backgroundImage: `url(./background.svg)`,
      }}
      className="h-full bg-contain bg-center flex gap-x-4 justify-stretch max-sm:flex-col bg-accent p-2"
    >
      <div
        className="bg-cover basis-2/5 sm:order-2 bg-background rounded-3.5xl sm:rounded-4.5xl"
        style={{
          backgroundImage: `url(./background-light.svg)`,
        }}
      />
      <div className="basis-3/5 flex flex-col max-sm:contents text-white">
        <p className="text-center py-8 grow">{description}</p>
        <ul
          className="flex-none backdrop-blur-sm basis-20 border border-white/30 flex overflow-hidden rounded-3.5xl sm:rounded-4.5xl"
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {links.map(({ name, href }) => {
            const Icon = PROJECT_ICONS[name];
            return (
              <motion.div
                whileHover={{
                  backgroundPosition: "100% 100%",
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                className="flex-1"
                style={{
                  background:
                    "linear-gradient(transparent, transparent 50%, #252525bd 50%, #252525bd )",
                  backgroundSize: "100% 200%",
                }}
              >
                <a
                  href={href}
                  className="h-full flex justify-center items-center"
                >
                  <Icon size={40} />
                </a>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

const Card = ({
  index,
  ...project
}: (typeof PROJECTS)[number] & { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.9,
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex justify-center min-h-[400px] max-w-[800px] mx-auto"
    >
      <WrappingTitle title={project.title} isInView={isInView} />
      <motion.div
        animate={{
          width: isInView ? "100%" : "100px",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "bounce",
        }}
        className="bg-background rounded-4xl sm:rounded-5xl overflow-hidden border-4 border-background"
      >
        <AnimatePresence>
          {isInView && <ExpandedCard index={index} {...project} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const NewCards = () => {
  return (
    <motion.div className="w-full bg-white p-10 pt-16 sm:p-20 sm:pt-40 space-y-20 sm:space-y-32 sm:min-h-screen">
      {PROJECTS.map((project, index) => (
        <Card key={index} index={index} {...project} />
      ))}
    </motion.div>
  );
};

export default NewCards;
