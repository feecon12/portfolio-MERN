/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        dark: "#000000",
        light: "#fefefe",
        primary: "#BC198D",
        primaryDark: "#58E6D9",
      },
    },
  },
  plugins: [],
};
