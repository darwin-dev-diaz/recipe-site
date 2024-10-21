/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        orange: "#ff6f00",
        black: "#1c1c1c",
        "dark-grey": "#333333",
        "light-orange": "#ffa733",
        white: "#ffffff",
        "light-grey": "#b0b0b0",
        "dark-light-grey": "#757575",
        "dark-orange": "#e65100",
        "very-dark-orange": "#7e2c00",
        "very-light-grey": "#F2F2F2",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
