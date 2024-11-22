import { Transition, motion } from "framer-motion";

const transition: Transition = {
  duration: 1,
  ease: "backInOut",
  delay: 0.2,
};

const CardBackground1 = () => {
  return (
    <>
      <motion.path
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m224.23612,131.85993l-42.42313,-40.35688l42.41542,-40.35688l-21.80527,-20.7579l-42.42313,40.35688l-42.42313,-40.35688l-21.80527,20.7579l42.41542,40.35688l-42.42313,40.35688l21.82069,20.75057l42.41542,-40.35688l42.41542,40.35688"
      />
      <motion.path
        initial={{ rotate: 90 }}
        variants={{
          hover: {
            scaleY: 1.25,
            y: -40,
            rotateZ: 180,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m74.58334,178.2338l85.41666,0l0,0c47.17433,0 85.41666,41.81785 85.41666,93.40278c0,51.58494 -38.24234,93.40278 -85.41666,93.40278l-85.41666,0l0,-186.80557z"
      />
    </>
  );
};

const CardBackground2 = () => {
  return (
    <>
      <motion.path
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m19.02778,120l0,0c0,-51.39316 41.19603,-93.05555 92.01389,-93.05555l0,0c24.40359,0 47.8077,9.80403 65.06364,27.25533c17.25596,17.45131 26.95026,41.12034 26.95026,65.80022l0,0c0,51.39315 -41.19603,93.05555 -92.01389,93.05555l0,0c-50.81786,0 -92.01389,-41.6624 -92.01389,-93.05555zm46.00695,0l0,0c0,25.69657 20.59803,46.52778 46.00695,46.52778c25.40894,0 46.00695,-20.8312 46.00695,-46.52778c0,-25.69657 -20.59802,-46.52778 -46.00695,-46.52778l0,0c-25.40892,0 -46.00695,20.83121 -46.00695,46.52778z"
      />
      <motion.path
        initial={{ rotate: -45 }}
        variants={{
          hover: {
            scaleY: 2.25,
            y: -15,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m125.30483,218.10325l153.41802,0l0,0c20.0982,0 36.39097,15.92099 36.39097,35.56051c0,19.63951 -16.29278,35.56049 -36.39097,35.56049l-153.41802,0l0,0c-20.09817,0 -36.39097,-15.92098 -36.39097,-35.56049c0,-19.63953 16.29279,-35.56051 36.39097,-35.56051z"
      />
    </>
  );
};

const CardBackground3 = () => {
  return (
    <>
      <motion.ellipse
        variants={{
          hover: {
            scale: 1.05,
            y: -25,
          },
        }}
        transition={transition}
        cx="219.7"
        cy="107.4"
        rx="80"
        ry="80"
        className="fill-none stroke-current stroke-[6px]"
      />
      <motion.ellipse
        variants={{
          hover: {
            scale: 0.9,
            y: -25,
          },
        }}
        transition={transition}
        cx="219.7"
        cy="107.4"
        rx="55"
        ry="55"
        className="fill-none stroke-current stroke-[6px]"
      />
      <motion.path
        variants={{
          hover: {
            scaleY: 1.5,
            x: -30,
            y: -20,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m55.56734,202.21382l73.87707,0l0,0c40.80119,0 73.87707,36.2117 73.87707,80.8811c0,44.6694 -33.07589,80.8811 -73.87707,80.8811l-73.87707,0l0,-161.7622z"
      />
    </>
  );
};

const CardBackground4 = () => {
  return (
    <>
      <motion.path
        variants={{
          hover: {
            scaleY: 2,
            y: -25,
            x: 20,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m42.58421,77.03955l157.74763,0l0,0c20.66539,0 37.41796,18.44925 37.41796,41.20754c0,22.75828 -16.75258,41.20753 -37.41796,41.20753l-157.74763,0l0,0c-20.66537,0 -37.41796,-18.44924 -37.41796,-41.20753c0,-22.7583 16.75259,-41.20754 37.41796,-41.20754z"
      />
      <motion.path
        variants={{
          hover: {
            scale: 0.8,
            y: 10,
            rotateZ: -180,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m274.23612,312.32475l-50.67844,-49.9875l50.66923,-49.9875l-26.04846,-25.71149l-50.67844,49.9875l-50.67844,-49.9875l-26.04846,25.71149l50.66923,49.9875l-50.67844,49.9875l26.06688,25.70241l50.66923,-49.9875l50.66923,49.9875"
      />
    </>
  );
};

const CardBackground5 = () => {
  return (
    <>
      <motion.path
        variants={{
          hover: {
            scaleY: 1.2,
            rotateZ: -450,
            y: -20,
          },
        }}
        transition={transition}
        className="fill-none stroke-current stroke-[20px] [stroke-dasharray:2]"
        d="m86.12292,53.60268l73.87707,0l0,0c40.80119,0 73.87707,34.50168 73.87707,77.06165c0,42.55998 -33.07589,77.06165 -73.87707,77.06165l-73.87707,0l0,-154.12331z"
      />
      <motion.path
        variants={{
          hover: {
            scaleY: 1.5,
            y: 20,
          },
        }}
        transition={transition}
        className="fill-current"
        d="m70.52867,239.53955l178.94266,0l0,0c23.442,0 42.44544,22.80204 42.44544,50.92977c0,28.12772 -19.00346,50.92975 -42.44544,50.92975l-178.94266,0l0,0c-23.44197,0 -42.44544,-22.80203 -42.44544,-50.92975c0,-28.12774 19.00347,-50.92977 42.44544,-50.92977z"
      />
    </>
  );
};

const BACKGROUND_ANIMATIONS = [
  CardBackground1,
  CardBackground2,
  CardBackground3,
  CardBackground4,
  CardBackground5,
];

export const Background = ({ index }: { index: number }) => {
  return (
    <motion.svg
      viewBox="0 0 320 384"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0 p-2 m-auto max-w-full max-h-full text-primary-dark"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      {BACKGROUND_ANIMATIONS[index % BACKGROUND_ANIMATIONS.length]()}
    </motion.svg>
  );
};
