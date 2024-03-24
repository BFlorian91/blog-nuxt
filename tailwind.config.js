/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#b6c3b3",
        secondary: "#445457",
        accent: "#72c36e",
        text: "#eff3ee",
        background: "#080a08",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
