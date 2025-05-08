/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blackj: "#000",
      redj: "#FF0000",
      redj2: "rgba(238, 29, 26, 0.70);",
      redjl: "#EE1D1A",
      white: "#FFF",
      placeholder: "#373737",
    },
    fontFamily: {
      sans: ["archivo", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
