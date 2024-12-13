import { motion } from "framer-motion";
import { Background } from "../animations/about-me.animations";
import { ABOUT_ME_CARDS } from "../data/about-me.data";
type Props = (typeof ABOUT_ME_CARDS)[number] & { index: number };

const AnimatedCard = ({ title, description, index }: Props) => {
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
      className="relative h-full w-full rounded-5xl bg-foreground border border-border p-8 overflow-hidden"
    >
      <div className="relative h-full flex flex-col justify-between z-10 text-copy">
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
          className="my-2 origin-top-left text-6xl lowercase font-bold"
        >
          {title}
        </motion.span>
        {!!description && <p className="font-bold">{description}</p>}
      </div>
      <Background index={index} />
    </motion.div>
  );
};

export default AnimatedCard;
