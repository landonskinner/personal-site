import { FaArrowDown } from "react-icons/fa";

export const ABOUT_ME_CARDS = [
  {
    title: "Hi,\nI'm Landon Skinner.",
    description: "I'm a Front-End Engineer based in Denver, CO.",
  },
  {
    title: "Currently, I work at Gartner.",
    description:
      "My team built and supports our organization's flagship forms-as-a-service application, which funnels +$100M in Pay-Per-Lead revenue annually.",
  },
  {
    title: "I leverage many tools.",
    description:
      "In my day-to-day, I use a range of services, libraries, and framework. NextJS, Vercel, GraphQL, TypeScript, NodeJS, TailwindCSS, LaunchDarkly, Google Analytics, Contentful, Jest...",
  },
  {
    title: "I enjoy a challenge",
    description:
      "Despite entering my company in a junior position, my role has allowed me the freedom and space to explore interests, take charge on intiatives, and grow as an engineer. I love the process of taking an idea from inception to production.",
  },
  {
    title: "and being creative.",
    description:
      "Outside of work right now, I'm having fun experimenting with web animations. I've been using Framer Motion to create some fun and engaging interactions.",
  },
  {
    title: "I do other things too.",
    description:
      "When I'm not at the computer, I enjoy hiking and camping, pretending to be a foodie, and being a dog dad.",
  },
  {
    title: (
      <>
        Check out what I've been working on
        <FaArrowDown className="mt-3" />
      </>
    ),
  },
];
