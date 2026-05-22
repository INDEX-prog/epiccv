import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a0e1a",
          800: "#101829",
          700: "#1a2744",
          600: "#243656",
          500: "#2e4568",
        },
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#d4a418",
          600: "#b8860b",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      fontFamily: {
        medieval: ["Cinzel", "serif"],
        body: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse at center, rgba(212, 164, 24, 0.1) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
