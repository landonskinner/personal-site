import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { transition } from "../animations/contact-links.animations";
import { CONTACT_LINKS } from "../data/contact-links.data";
const font = Space_Grotesk({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const ContactLinks = () => (
  <section
    className={`${font.className} grid place-content-center gap-2 bg-background px-8 py-24 h-screen`}
  >
    {CONTACT_LINKS.map((link, i) => (
      <FlipLink key={i} href={link.href}>
        {link.title}
      </FlipLink>
    ))}
  </section>
);

export default ContactLinks;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      href={href}
      className="relative block overflow-hidden leading-[0.75] sm:leading-[0.75] tracking-tighter whitespace-nowrap text-7xl sm:text-9xl"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hover: {
                y: "-100%",
              },
            }}
            transition={transition(i)}
            className="inline-block text-primary"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hover: {
                y: 0,
              },
            }}
            transition={transition(i)}
            className="inline-block text-copy-lighter"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
