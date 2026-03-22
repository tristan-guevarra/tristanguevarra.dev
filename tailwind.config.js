/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FAFAF7",
          secondary: "#F0EFEB",
          inverse: "#0A0A08",
        },
        ink: {
          DEFAULT: "#0A0A08",
          secondary: "#6B6B63",
          tertiary: "#9B9B93",
          inverse: "#FAFAF7",
        },
        accent: {
          DEFAULT: "#2B44FF",
          muted: "#2B44FF20",
          hover: "#1A33EE",
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        hero: ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        heading: ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        subheading: ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "bar-grow": {
          "0%": { transform: "scaleY(0.3)", opacity: "0.3" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0.3)", opacity: "0.3" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "bar-grow": "bar-grow 1.2s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
