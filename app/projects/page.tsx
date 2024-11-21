"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <a href="/#project-cards">hhere</a>
      </motion.div>
      <motion.div layout className="h-full w-full p-10">
        <motion.div
          layoutId="test-layout"
          className="h-full w-full bg-purple-300"
        >
          hello
        </motion.div>
      </motion.div>
    </>
  );
}
