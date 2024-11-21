import { motion, useScroll, useTransform } from "framer-motion";
import {
  drawCircle,
  drawLine,
  transitionPath,
} from "../animations/sticky-header.animations";

const StickyHeader = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.5, 0.5]);

  return (
    <motion.svg
      initial="start"
      animate="end"
      xmlns="http://www.w3.org/2000/svg"
      className="sticky top-1 z-10 mx-auto py-14 px-12 my-8 max-w-[900px] bg-background/20 rounded-5xl origin-top backdrop-blur-md"
      viewBox="0 0 800 225"
      //   TODO: color decision
      color="#000"
      stroke="#000"
      style={{
        scale,
        border: "1px solid #33323145",
        boxShadow: "0 4px 30px #33323127",
      }}
    >
      {/* L */}
      <path
        fill="currentColor"
        d="m69.7136,38.87748l0,147.40337l0,0c0,19.31026 -15.41555,34.96428 -34.4316,34.96428c-19.01603,0 -34.43157,-15.65404 -34.43157,-34.96428l0,-147.40337l0,0c0,-19.31023 15.41554,-34.96428 34.43157,-34.96428c19.01606,0 34.4316,15.65404 34.4316,34.96428z"
      />
      <MotionPath
        path={[
          "m190.9465,36.43487l0,148.81638l0,0c0,19.49537 -15.41555,35.29945 -34.43159,35.29945c-19.01604,0 -34.43158,-15.80409 -34.43158,-35.29945l0,-148.81638l0,0c0,-19.49534 15.41554,-35.29945 34.43158,-35.29945c19.01606,0 34.43159,15.8041 34.43159,35.29945z",
          "m116.42463,221.24302l-92.87814,0l0,0c-12.1673,0 -22.03082,-15.53289 -22.03082,-34.69369c0,-19.16079 9.86353,-34.69367 22.03082,-34.69367l92.87814,0l0,0c12.16729,0 22.03083,15.53288 22.03083,34.69367c0,19.16082 -9.86354,34.69369 -22.03083,34.69369z",
        ]}
      />

      {/* A */}
      <MotionPath
        path={[
          "m313.02984,36.43487l0,148.81638l0,0c0,19.49537 -15.41555,35.29945 -34.43159,35.29945c-19.01604,0 -34.43158,-15.80409 -34.43158,-35.29945l0,-148.81638l0,0c0,-19.49534 15.41554,-35.29945 34.43158,-35.29945c19.01606,0 34.43159,15.8041 34.43159,35.29945z",
          "m219.40644,55.85184l-66.69382,143.18208l0,0c-8.73708,18.75726 -29.26425,27.2601 -45.84876,18.99168c-16.58449,-8.26841 -22.94609,-30.17703 -14.20902,-48.93427l66.69382,-143.18208l0,0c8.73707,-18.75723 29.26424,-27.26011 45.84874,-18.99169c16.58451,8.26843 22.94611,30.17705 14.20904,48.93429z",
        ]}
      />
      <MotionLine
        x1="145.02041"
        y1="143.17131"
        x2="250.94543"
        y2="143.6762"
        delay={0}
      />
      <MotionLine
        x1="219.11686"
        y1="29.14916"
        x2="267.08002"
        y2="199.73938"
        delay={0.5}
      />

      {/* N1 */}
      <MotionLine
        x1="324.38878"
        y1="25.58567"
        x2="370.3769"
        y2="196.03134"
        delay={1.5}
      />
      <MotionPath
        path={[
          "m433.72428,36.43487l0,148.81638l0,0c0,19.49537 -15.41555,35.29945 -34.43159,35.29945c-19.01604,0 -34.43158,-15.80409 -34.43158,-35.29945l0,-148.81638l0,0c0,-19.49534 15.41554,-35.29945 34.43158,-35.29945c19.01606,0 34.43159,15.8041 34.43159,35.29945z",
          "m329.9901,38.66028l0,145.80828l0,0c0,19.1013 -15.41555,34.58592 -34.4316,34.58592c-19.01603,0 -34.43157,-15.48463 -34.43157,-34.58592l0,-145.80828l0,0c0,-19.10126 15.41554,-34.58591 34.43157,-34.58591c19.01606,0 34.4316,15.48465 34.4316,34.58591z",
        ]}
      />
      <MotionPath
        path={[
          "m553.72428,35.74043l0,148.81638l0,0c0,19.49537 -15.41555,35.29945 -34.43159,35.29945c-19.01604,0 -34.43158,-15.80409 -34.43158,-35.29945l0,-148.81638l0,0c0,-19.49534 15.41554,-35.29945 34.43158,-35.29945c19.01606,0 34.43159,15.8041 34.43159,35.29945z",
          "m434.7681,38.92527l0,147.1158l0,0c0,19.27259 -15.41555,34.89606 -34.4316,34.89606c-19.01603,0 -34.43157,-15.62349 -34.43157,-34.89606l0,-147.1158l0,0c0,-19.27255 15.41554,-34.89605 34.43157,-34.89605c19.01606,0 34.4316,15.62351 34.4316,34.89605z",
        ]}
      />

      {/* D */}
      <motion.path
        initial="hidden"
        animate="visible"
        variants={drawLine}
        custom={2.5}
        stroke="currentColor"
        fill="none"
        strokeWidth="6"
        d="m403.73262,6.81417l75.41342,0l0,0c41.64969,0 75.41342,47.32993 75.41342,105.71438c0,58.38445 -33.76373,105.71438 -75.41342,105.71438l-75.41342,0l0,-211.42874l0,-0.00001z"
      />

      {/* O */}
      <motion.circle
        initial="hidden"
        animate="visible"
        variants={drawLine}
        custom={4.5}
        stroke="currentColor"
        fill="none"
        strokeWidth="6"
        cx="560.54459"
        cy="112.74647"
        r="104"
      />
      <motion.circle
        initial="hidden"
        animate="visible"
        variants={drawCircle}
        custom={3.5}
        fill="none"
        cx="560.54463"
        cy="112.74647"
        r="60"
      />

      {/* N2 */}
      <MotionLine
        x1="689.46469"
        y1="28.25978"
        x2="734.75837"
        y2="196.62209"
        delay={5.5}
      />
      <MotionPath
        path={[
          "m674.41873,36.43487l0,148.81638l0,0c0,19.49537 -15.41555,35.29945 -34.43159,35.29945c-19.01604,0 -34.43158,-15.80409 -34.43158,-35.29945l0,-148.81638l0,0c0,-19.49534 15.41554,-35.29945 34.43158,-35.29945c19.01606,0 34.43159,15.8041 34.43159,35.29945z",
          "m694.37156,39.94548l0,145.80828l0,0c0,19.1013 -15.41555,34.58592 -34.4316,34.58592c-19.01603,0 -34.43157,-15.48463 -34.43157,-34.58592l0,-145.80828l0,0c0,-19.10126 15.41554,-34.58591 34.43157,-34.58591c19.01606,0 34.4316,15.48465 34.4316,34.58591z",
        ]}
      />
      <path
        fill="currentColor"
        d="m799.14955,40.0037l0,146.24412l0,0c0,19.1584 -15.41555,34.6893 -34.4316,34.6893c-19.01603,0 -34.43157,-15.53091 -34.43157,-34.6893l0,-146.24412l0,0c0,-19.15835 15.41554,-34.68929 34.43157,-34.68929c19.01606,0 34.4316,15.53094 34.4316,34.68929z"
      />
    </motion.svg>
  );
};

export default StickyHeader;

const MotionPath = ({ path }: { path: [start: string, end: string] }) => {
  return (
    <motion.path
      initial="start"
      animate="end"
      variants={{ start: { d: path[0] }, end: { d: path[1] } }}
      transition={transitionPath}
      fill="currentColor"
    />
  );
};

const MotionLine = ({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  delay: number;
}) => {
  return (
    <motion.line
      initial="hidden"
      animate="visible"
      variants={drawLine}
      stroke="currentColor"
      strokeWidth="6"
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      custom={delay}
    />
  );
};
