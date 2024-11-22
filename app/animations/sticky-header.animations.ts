import { type Transition, type Variants } from "framer-motion";

const INITIAL_DELAY = 0.25;
const SHRINK_DURATION = 0.75;

const delay = (i: number) => INITIAL_DELAY + SHRINK_DURATION + i * 0.5;

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: delay(i), duration: 1, bounce: 0 },
        opacity: { delay: delay(i), duration: 0.01 },
      },
    };
  },
};

export const drawCircle: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    strokeWidth: 6,
    stroke: "currentColor",
  },
  visible: (i: number) => {
    const fillAnimationOffset = 2;
    return {
      pathLength: 1,
      opacity: 1,
      strokeWidth: 72,
      stroke: "var(--primary-dark)",
      transition: {
        pathLength: { delay: delay(i), duration: 1, bounce: 0 },
        opacity: { delay: delay(i), duration: 0.01 },
        strokeWidth: { delay: delay(i) + fillAnimationOffset, duration: 1 },
        stroke: { delay: delay(i) + fillAnimationOffset, duration: 0.01 },
      },
    };
  },
};

export const transitionPath: Transition = {
  duration: SHRINK_DURATION,
  delay: INITIAL_DELAY,
  ease: "easeInOut",
};
