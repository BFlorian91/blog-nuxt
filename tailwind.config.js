/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#b0babf",
        secondary: "#505262",
        accent: "#7b7993",
        text: "#eef0f1",
        background: "#05080a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
