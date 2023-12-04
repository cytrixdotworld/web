import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      display: ["Urbanist", "ui-display"],
    },
    colors: {
      baseline: {
        light: {
          primary: "#6750A4",
          "on-primary": "#FFFFFF",
          "primary-container": "#EADDFF",
          "on-primary-container": "#21005D",

          secondary: "#625B71",
          "on-secondary": "#FFFFFF",
          "secondary-container": "#E8DEF8",
          "on-secondary-container": "#1D192B",

          tertiary: "#1D192B",
          "on-tertiary": "#FFFFFF",
          "tertiary-container": "#FFD8E4",
          "on-tertiary-container": "#31111D",

          error: "#B3261E",
          "on-error": "#FFFFFF",
          "error-container": "#F9DEDC",
          "on-error-container": "#410E0B",

          surface: "#FEF7FF",
          "on-surface": "#1D1B20",
          "surface-variant": "#E7E0EC",
          "on-surface-variant": "#49454F",
          "surface-container-highest": "#E6E0E9",
          "surface-container-high": "#ECE6F0",
          "surface-container": "#F3EDF7",
          "surface-container-low": "#F7F2FA",
          "inverse-surface": "#322F35",
          "inverse-on-surface": "#F5EFF7",
          "surface-tint": "#6750A4",

          outline: "#79747E",
          "outline-variant": "#CAC4D0",
        },
      },
    },
  },
} as Config;
