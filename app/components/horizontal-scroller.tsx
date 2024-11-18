import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SquishyCard from "./squishy-card";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, i) => {
            // return <Card card={card} key={card.id} index={i} />;
            return <SquishyCard title={card.title} index={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, index }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(./background.svg)`,
          //   backgroundSize: "cover",
          backgroundSize: "250%",
          backgroundRepeat: "repeat",
          backgroundPosition: `top ${index * 20}% left -${index * 10}%`,
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 m-12 rounded-2xl overflow-hidden">
        <p className="bg-white h-full p-4 text-4xl font-semibold text-black">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "./background.svg",
    title: "Hi.\nI'm Landon Skinner.",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
