"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { PROJECTS } from "../data/project-cards.data";

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
      className="absolute max-w-screen w-full sm:w-[500px] z-0 -top-5 -left-5 sm:-top-8 sm:-left-8"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        id="titlePath"
        className="fill-none"
        d="m1,318.34693c0.64202,-205.08236 -0.48943,-218.79824 -0.76907,-259.51999c0.57604,-21.39773 9.56603,-34.269 17.04267,-40.92079c7.47664,-6.65179 10.9603,-13.79357 39.24741,-17.80961l442.21024,0.42499"
      />
      <text>
        <motion.textPath
          initial={{ startOffset: "3%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "bounce",
          }}
          animate={{
            startOffset: isInView ? "44%" : "3%",
          }}
          href="#titlePath"
          className="fill-copy-light text-3xl uppercase font-bold"
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
  Deployment: TbWorldWww,
};

const ExpandedCard = ({
  description,
  techUsed,
  comment,
  links,
  index,
}: (typeof PROJECTS)[number] & { index: number }) => {
  return (
    <motion.div
      key={`card-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
      className="h-full bg-background p-2"
    >
      <div className="h-full justify-between bg-left bg-decorative bg-cover flex flex-col gap-y-4">
        <div className="flex gap-x-4 justify-stretch max-sm:flex-col gap-y-6">
          <div className="shrink basis-2/5 sm:order-2 aspect-square h-fit bg-illustraite bg-cover bg-center bg-no-repeat border-border border-4 rounded-3.5xl sm:rounded-4.5xl" />
          <div className="h-full basis-3/5 text-copy-light justify-between flex flex-col gap-y-6 px-2 pt-2 sm:px-6 sm:pt-6">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold">{description}</p>
              <p className="text-sm md:text-lg md:leading-tight">{comment}</p>
            </div>

            <div>
              <h4 className="font-bold">Tech Used</h4>
              <p className="text-sm md:text-md">{techUsed.join(", ")}</p>
            </div>
          </div>
        </div>
        <ul className="flex pb-4">
          {links.map(({ name, href }) => {
            const Icon = PROJECT_ICONS[name];
            return (
              <div
                key={name}
                className="flex-1 text-copy-lighter hover:text-copy-light transition-colors duration-300"
              >
                <a
                  href={href}
                  className="h-full flex justify-center items-center"
                  target="_blank"
                >
                  <Icon size={40} />
                </a>
              </div>
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
    amount: 0.6,
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex justify-center h-[875px] sm:h-[600px] lg:h-[500px] max-w-[900px]"
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
        className="bg-border rounded-4xl sm:rounded-5xl overflow-hidden border border-border"
      >
        <AnimatePresence>
          {isInView && <ExpandedCard index={index} {...project} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const ProjectCards = () => {
  return (
    <motion.div className="w-full flex flex-col justify-center items-stretch sm:items-center bg-foreground p-10 pt-16 sm:p-20 sm:pt-40 space-y-20 sm:space-y-32 sm:min-h-screen">
      {PROJECTS.map((project, index) => (
        <Card key={index} index={index} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectCards;
