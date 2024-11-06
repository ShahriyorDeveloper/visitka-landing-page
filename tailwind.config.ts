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
        headerBlock1: "#EFBD42",
        headerBlock2: "#18A5A7",
        headerBlock3: "#4E8DFC",
        headerBlock4: "#7657FE",
        buttoBgRight: "#18A5A7",
        buttoBgLeft: "#BFFFC7",
        textRgb: "rgba(255, 255, 255, 0.79)",
        mainBoxRgb: "rgba(245, 247, 250, 1)",
        mainP: "rgba(71, 84, 103, 1)",
        cardsBgPrimary: "rgba(127, 86, 217, 1)",
        cardsBgSuccess: "rgba(7, 148, 85, 1)",
        cardsBgBlue: "rgba(21, 112, 239, 1)",
        cardsMainBg: "rgba(245, 247, 250, 1)",
        cardBg: "rgba(255, 255, 255, 1)",
        selectBg: "rgba(234, 236, 240, 1)",
        footerBorder: "#EAECF0"
      }
    },
  },
  plugins: [],
};
export default config;
