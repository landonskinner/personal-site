import { motion } from "framer-motion";
import { Background } from "../animations/about-me.animations";
import { Space_Grotesk } from "next/font/google";
import { ABOUT_ME_CARDS } from "../data/about-me.data";
const font = Space_Grotesk({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

type Props = (typeof ABOUT_ME_CARDS)[number] & { index: number };

const AnimatedCard = ({ title, index }: Props) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-full w-full rounded-5xl bg-indigo-500 p-8 overflow-hidden"
    >
      <div className="relative h-full flex flex-col justify-between z-10 text-white">
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className={`my-2 origin-top-left text-6xl ${font.className}`}
        >
          {title}
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
        </p>
      </div>
      <Background index={index} />
    </motion.div>
  );
};

export default AnimatedCard;