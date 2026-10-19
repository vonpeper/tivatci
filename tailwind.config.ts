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
        apple: {
          blue: "#0071e3",
          blueHover: "#0077ed",
          blueActive: "#0062c4",
          blueLight: "#f0f6ff",
          text: "#1d1d1f",
          subtext: "#6e6e73",
          tertiary: "#86868b",
          subdued: "#a1a1a6",
          bg: "#ffffff",
          surface: "#fbfbfd",
          secondarySurface: "#f5f5f7",
          border: "#e5e5ea",
          borderSubtle: "rgba(0,0,0,0.06)",
          emerald: "#34c759",
          emeraldBg: "#f0fdf4",
          purple: "#af52de",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        "apple-card": "0 2px 12px -2px rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        "apple-hover": "0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "apple-modal": "0 24px 64px -12px rgba(0, 0, 0, 0.18), 0 0 1px 1px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
