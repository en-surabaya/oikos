/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      black: colors.black,
      amber: colors.amber,
      primary: {
        light: "#558FE3",
        DEFAULT: "#255FB3",
      },
      secondary: {
        DEFAULT: "#FFB94F",
      },
      dark: {
        lighter: "#E5E5E5",
        light: "#D5D5D5",
        DEFAULT: "#1A2530",
      },
    },
  },
  plugins: [],
};
