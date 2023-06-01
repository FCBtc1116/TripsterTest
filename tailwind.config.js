/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      customBlue: "#1C63ED",
      customLightGreen: "#E1FFD8",
      customGreen: "#57B984",
      customFontColor: "#787878",
      customLightFontColor: "#D3D3D3",
    },
    extend: {},
  },
  plugins: [],
});
