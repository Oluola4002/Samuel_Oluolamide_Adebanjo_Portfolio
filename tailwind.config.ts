import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712", // Deep cosmic void
        foreground: "#F0F6FC",
        space: {
          void: "#02040a",
          dark: "#050B18",
          navy: "#0a1226",
          cosmos: "#0f1c3f",
          accent: "#1e3a8a",
        },
        surface: {
          50: "#091224",
          100: "#0d1a33",
          200: "#132342",
          300: "#1a2d54",
        },
        cosmic: {
          blue: "#2563eb",
          cyan: "#00E5FF",
          sky: "#38bdf8",
          rocket: "#ef4444", // Rocket crimson streak
          flame: "#f97316",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 25s linear infinite",
        "orbit-slow": "spin 40s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
