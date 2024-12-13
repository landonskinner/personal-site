import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        decorative: "var(--background-image)",
        illustraite: "var(--illustraite)",
      },
      borderRadius: {
        "3.5xl": "26px",
        "4xl": "36px",
        "4.5xl": "38px",
        "5xl": "48px",
      },
      colors: {
        primary: "var(--primary)",
        "primary-content": "var(--primary-content)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",

        copy: "var(--copy)",
        "copy-light": "var(--copy-light)",
        "copy-lighter": "var(--copy-lighter)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
