import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        obsidian: {
          50: "#f0f0f8",
          100: "#e0e1f0",
          200: "#c1c3e1",
          300: "#9ea0cc",
          400: "#7a7cb5",
          500: "#5e609e",
          600: "#494b81",
          700: "#3a3b65",
          800: "#1e1f3a",
          900: "#0e0f1c",
          950: "#07080f",
        },
        gold: "#e8a838",
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "shimmer-slide": "shimmer-slide 2.5s linear infinite",
        "blink-cursor": "blink-cursor 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "blink-cursor": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
