import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F6E632",
        secondary: "#931B88",
        accent: "#F6E632",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
        heading: ["var(--font-bebas-neue)"],
      },
      borderRadius: {
        base: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
