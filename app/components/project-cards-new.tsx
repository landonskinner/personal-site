import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
const font = Space_Grotesk({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const Card = ({ index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.9,
  });
  return (
    <motion.div ref={ref} className="relative w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-24 -24 500 320"
        className="absolute max-w-screen sm:w-[500px] z-0 -top-5 -left-5 sm:-top-8 sm:-left-8"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          stroke="none"
          id="circlePath"
          d="m1,318.34693c0.64202,-205.08236 -0.48943,-218.79824 -0.76907,-259.51999c0.57604,-21.39773 9.56603,-34.269 17.04267,-40.92079c7.47664,-6.65179 10.9603,-13.79357 39.24741,-17.80961l442.21024,0.42499"
          fill="none"
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
            href="#circlePath"
            fill="black"
            className={`fill-black text-3xl font-black uppercase ${font.className}`}
          >
            Project Name Here
          </motion.textPath>
        </text>
      </svg>
      <motion.div
        animate={{
          width: isInView ? "100%" : "100px",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-black min-h-80 w-full rounded-[36px] sm:rounded-[48px] overflow-hidden border-4 border-black "
      >
        <AnimatePresence>
          {isInView && (
            <motion.div
              key={`card-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                backgroundImage: `url(./background.svg)`,
              }}
              className=" h-full bg-contain bg-center flex gap-x-4 justify-stretch max-sm:flex-col bg-indigo-500 p-2"
            >
              <div
                className="bg-cover basis-2/5 sm:order-2 bg-black rounded-[26px] sm:rounded-[38px]"
                style={{
                  backgroundImage: `url(./background-light.svg)`,
                }}
              />
              <div className="basis-3/5 flex flex-col max-sm:contents">
                <p className="text-white text-center py-8 grow">
                  Project Description
                </p>
                <ul
                  className="text-white flex-none backdrop-blur-sm text-center basis-[80px] z-10 flex overflow-hidden rounded-[26px] sm:rounded-[38px]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {[
                    { name: "GitHub", icon: <FaGithub size={40} />, href: "" },
                    { name: "Demo", icon: <FaYoutube size={40} />, href: "" },
                    {
                      name: "Deployment",
                      icon: <IoLogoVercel size={40} />,
                      href: "",
                    },
                  ].map(({ name, icon, href }) => {
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
                        className="z-10 bg-top w-full h-full text-center flex-1 align-middle "
                        style={{
                          boxSizing: "border-box",
                          background:
                            "linear-gradient(#252525bd, #252525bd 50%, transparent 50%, transparent)",
                          backgroundSize: "100% 200%",
                          //   backgroundPosition: "100% 100%",
                        }}
                      >
                        <a
                          href={href}
                          className="h-full text-white flex justify-center items-center"
                        >
                          {icon}
                        </a>
                      </motion.div>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const NewCards = () => {
  return (
    <motion.div className="w-full bg-white p-10 sm:p-20 space-y-20 min-h-screen items-center overflow-hidden">
      {[0, 1].map((index) => (
        <Card key={index} index={index} />
      ))}
    </motion.div>
  );
};

export default NewCards;
