/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        dark: "#00000",
        light: "#f5f5f5",
        primary: "#BC198D",
        primaryDark: "#58E6D9",
      },
    },
  },
  plugins: [],
};
