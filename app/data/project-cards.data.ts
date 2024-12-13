export const PROJECTS = [
  {
    title: "ILLUSTRAITOR",
    description:
      "IllustrAItor is a gamified illustration tool that leverages AI to grade your drawings.",
    comment:
      "The aim of this project was to learn more about HTML's Canvas API and its application for user-generated animations. Additionally, this was an opportunity to experiment with Vercel's AI SDK and the ease of OpenAI integration. Finally, I found it to be an interesting case study in implementing an AI-focused application design.",
    techUsed: [
      "NextJS",
      "Vercel AI",
      "shadcn/ui",
      "TailwindCSS",
      "TypeScript",
      "HTML Canvas",
      "Jest",
    ],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/landonskinner/illustraitor-app",
      },
      {
        name: "Deployment",
        href: "https://illustraitor-app.vercel.app/",
      },
    ],
  },
] as const;
