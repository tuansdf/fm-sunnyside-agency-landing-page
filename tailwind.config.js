const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-heading)"],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
    colors: {
      primary: {
        red: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        blue: "hsl(198, 62%, 26%)",
        cyan: {
          1: "hsl(167, 40%, 24%)",
          2: "hsl(168, 34%, 41%)",
        },
      },
      neutral: {
        0: "hsl(0, 0%, 100%)",
        600: "hsl(210, 4%, 67%)",
        700: "hsl(232, 10%, 55%)",
        800: "hsl(213, 9%, 39%)",
        900: "hsl(212, 27%, 19%)",
      },
      transparent: colors.transparent,
    },
  },
  plugins: [],
};
