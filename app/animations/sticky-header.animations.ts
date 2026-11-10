import { type Transition, type Variants } from "framer-motion";

const INITIAL_DELAY = 0.25;
const SHRINK_DURATION = 0.75;

const delay = (i: number) => INITIAL_DELAY + SHRINK_DURATION + i * 0.5;

// How long after the O's outline starts drawing it begins thickening into a fill.
const DRAW_DURATION = 1;
const FILL_OFFSET = 2;
const FILL_DURATION = 1;

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
    return {
      pathLength: 1,
      opacity: 1,
      strokeWidth: 72,
      stroke: "var(--copy-light)",
      transition: {
        pathLength: { delay: delay(i), duration: DRAW_DURATION, bounce: 0 },
        opacity: { delay: delay(i), duration: 0.01 },
        strokeWidth: { delay: delay(i) + FILL_OFFSET, duration: FILL_DURATION },
        stroke: { delay: delay(i) + FILL_OFFSET, duration: 0.01 },
      },
    };
  },
};

// A dashed stroke (which pathLength uses) leaves a hairline seam where the dash
// starts and ends. As soon as the O's outline finishes drawing, this undashed
// copy takes over on top of it and does the thickening itself, so the seam
// never shows.
export const solidCircle: Variants = {
  hidden: { opacity: 0, strokeWidth: 6, stroke: "currentColor" },
  visible: (i: number) => ({
    opacity: 1,
    strokeWidth: 72,
    stroke: "var(--copy-light)",
    transition: {
      opacity: { delay: delay(i) + DRAW_DURATION, duration: 0.01 },
      strokeWidth: { delay: delay(i) + FILL_OFFSET, duration: FILL_DURATION },
      stroke: { delay: delay(i) + FILL_OFFSET, duration: 0.01 },
    },
  }),
};

export const transitionPath: Transition = {
  duration: SHRINK_DURATION,
  delay: INITIAL_DELAY,
  ease: "easeInOut",
};
