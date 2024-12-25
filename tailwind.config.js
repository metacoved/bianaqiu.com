/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: ["selector", "[data-dark-mode='true']"],
  theme: {
    fontFamily: {
      display: ["Avenir", "Montserrat", "Corbel", "'URW Gothic'", "source-sans-pro", "sans-serif"]
    },
    extend: {
      colors: {
        theme: {
          50: "#fff4fd",
          100: "#ffe8fc",
          200: "#fed0f7",
          300: "#fbaceb",
          400: "#f87add",
          500: "#ed48c8",
          600: "#d128a8",
          700: "#b71f8f",
          800: "#8e1a6e",
          900: "#741b5a",
          950: "#4d0538",
        },
        dulltheme: {
          50: "#f8f7f8",
          100: "#f0eeef",
          200: "#ded9dc",
          300: "#c2b7bf",
          400: "#a0909c",
          500: "#847380",
          600: "#6d5c68",
          700: "#584c55",
          800: "#4b4149",
          900: "#393237",
          950: "#2b2629",
        },
      },
    },
  },
  plugins: [],
};
