/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blackj: "#000",
      redj: "#FF0000",
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
