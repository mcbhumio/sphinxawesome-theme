const colors = require("tailwindcss/colors");

module.exports = {
  corePlugins: {
    animation: false,
  },
  mode: "jit",
  purge: ["../sphinxawesome_theme/*.html", "./js/*.js"],
  variants: {
    extend: {
      outline: ["active"],
    },
  },
  theme: {
    fontFamily: {
      'sans': ['"Inter var"', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      latin: "lower-latin",
    },
    extend: {
      screens: {
        print: { raw: "print" },
      },
      margin: {
        fluid: "var(--fluid-margin)",
      },
      colors: {
        blue: colors.lightBlue,
      },
    },
  },
};
