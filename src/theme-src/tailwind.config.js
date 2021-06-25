const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#ffffff',
  ultramarine: {
    DEFAULT: '#456CE3',
    600: '#3056CA'
  },
  gray: {
    DEFAULT: '#636B78',
    50: '#FAFAFA',
    100: '#EDEEEF',
    300: '#C4C8CD',
    500: '#636B78',
    700: '#2E353D'
  },
  red: {
    DEFAULT: '#F04040',
    500: '#F04040',
    'error-dark': '#300D0D'
  },
  yellow: {
    DEFAULT: '#F9B420',
    500: '#F9B420',
    'warning-dark': '#322406'
  },
  green: {
    DEFAULT: '#31C456',
    500: '#31C456',
    'success-dark': '#0A2711'
  },
  magenta: {
    600: '#D03592',
    700: '#A52772'
  }
}


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
