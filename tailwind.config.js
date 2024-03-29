/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#b6c3b3",
        secondary: "#85A1A3",
        accent: "#00F490",
        text: "#eff3ee",
        text_dark: "#080808",
        background: "#080a08",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
