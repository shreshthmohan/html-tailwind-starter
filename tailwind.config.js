/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // TODO: the idea now is that you add an object with such keys below
      // to override the default (and dark) theme for code blocks

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: { backgroundColor: "green" },
            pre: { backgroundColor: "green" },
            ".token": {
              backgroundColor: "blue",
              color: "white",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.red[900]"),
            code: { backgroundColor: "red" },
            ".token": {
              backgroundColor: "blue",
              color: "white",
            },
          },
        },
      }),
      // typography: {
      //   // https://github.dev/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      //   DEFAULT: {
      //     css: {
      //       "code::before": {
      //         content: '""',
      //       },
      //       "code::after": {
      //         content: '""',
      //       },
      //       h1: {
      //         fontWeight: "600",
      //       },
      //       h2: {
      //         fontWeight: "500",
      //       },
      //       h3: {
      //         fontWeight: "500",
      //       },
      //       ".code-line": {
      //         backgroundColor: "red",
      //       },
      //     },
      //   },
      // },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
