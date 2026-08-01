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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#eab308", // Yellow from reference
          dark: "#ca8a04",
        },
        secondary: {
          DEFAULT: "#1e293b", // Dark slate from reference
          dark: "#0f172a",
        }
      },
    },
  },
  plugins: [],
};
export default config;
