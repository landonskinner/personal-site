"use client";
import { DarkInner } from "@theme-toggles/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { useDarkMode } from "../hooks/use-dark-mode";

const JumpButton = () => {
  return (
    <motion.button
      initial={{ left: "200%" }}
      animate={{ left: "0%" }}
      exit={{ left: "200%" }}
      className="relative rounded-full backdrop-blur-md grow basis-14 sm:basis-12"
      onClick={() => {
        scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <MdOutlineArrowCircleUp className="w-full h-full text-copy-lighter" />
    </motion.button>
  );
};

const DarkModeToggle = () => {
  const { toggleDarkMode } = useDarkMode();
  return (
    <div className="w-full flex rounded-full p-1 backdrop-blur-md grow basis-14 sm:basis-12 row-start-2">
      {/* @ts-ignore */}
      <DarkInner
        className="text-copy-lighter grow [&>svg]:w-full [&>svg]:h-full"
        duration={750}
        onClickCapture={toggleDarkMode}
      />
    </div>
  );
};

const PageButtons = () => {
  const [showJumpButton, setShowJumpButton] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowJumpButton(latest > window.innerHeight);
  });

  return (
    <div className="sticky top-[85vh] mx-4 sm:mx-2 left-full z-50 grid grid-rows-2 gap-1.5 grid-cols-1 w-14 sm:w-12 items-stretch justify-stretch">
      <AnimatePresence>{showJumpButton && <JumpButton />}</AnimatePresence>
      <DarkModeToggle />
    </div>
  );
};

export default PageButtons;
