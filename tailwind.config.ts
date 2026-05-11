import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0c0a08",
          900: "#13110d",
          800: "#1d1a14",
          700: "#2a251c",
          600: "#3a3327",
        },
        parchment: {
          50: "#f5ecd7",
          100: "#ecdfc1",
          200: "#dfceaa",
          300: "#cdb88a",
          400: "#b29c6e",
          500: "#917e57",
        },
        gold: {
          400: "#d8b878",
          500: "#c9a96b",
          600: "#a98a4f",
          700: "#86683a",
        },
        sage: {
          400: "#8aa68a",
          500: "#6b8a6b",
          600: "#506b50",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        arabic: ["var(--font-arabic)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
