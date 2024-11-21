import { Transition } from "framer-motion";

const DURATION = 0.4;
const STAGGER = 0.04;

export const transition = (i: number): Transition => ({
  duration: DURATION,
  ease: "easeInOut",
  delay: STAGGER * i,
});
