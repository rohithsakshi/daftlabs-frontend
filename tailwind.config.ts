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
        // Brand accent (electric blue)
        accent: {
          DEFAULT: "#2563EB",
          hover: "#3B82F6",
          glow: "rgba(37, 99, 235, 0.15)",
          subtle: "rgba(37, 99, 235, 0.08)",
        },
        // Dark backgrounds
        dark: {
          900: "#081220",
          800: "#0B1220",
          700: "#0F172A",
        },
        // Surfaces / cards
        surface: {
          DEFAULT: "#111827",
          secondary: "#0F1B2D",
          tertiary: "#132033",
          hover: "#1A2744",
        },
        // Text
        "text-primary": "#F1F5F9",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",
      },
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.08)",
        "subtle-hover": "rgba(255, 255, 255, 0.14)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.08)",
        "glow-lg": "0 0 60px rgba(37, 99, 235, 0.12)",
        "glow-accent":
          "0 0 20px rgba(37, 99, 235, 0.2), 0 0 60px rgba(37, 99, 235, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
