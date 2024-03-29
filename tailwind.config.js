/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue,md}"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: "#b6c3b3",
        secondary: "#85A1A3",
        accent: "#00F490",
        text: "#eff3ee",
        text_dark: "#080808",
        background: "#080a08",
        debug: "#FF99CF",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            fontFamily: "SourceSansPro",
            maxWidth: "100ch",
            h1: {
              color: theme("colors.text"),
              fontFamily: "Oswald",
              fontweight: "700",
              fontSize: "4rem",
            },
            a: {
              color: theme("colors.text"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.accent"),
              },
            },
            blockquote: {
              color: theme("colors.text"),
            },
            p: {
              color: theme("colors.text"),
            },
            strong: {
              color: theme("colors.text"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
