/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"
  ],
  theme: {
    extend: {
      colors:
      {
        "primary-green": "#4397A4",
        "content-green-primary": "#486A6F",
        "content-green-secondary": "#678C92",
        "sky-violet": "#C6DBFF",
        "primary-bg": "#F4F7FF",
        "secondary-bg": "#CDDFFE",
        "content-small": "#5BCCDE",
        "repetitive-bg": "#E1EBFA",
        "hero-bg": "#85A8E1"
      },
      height: {
        "13": "3.125rem"
      },
      width: {
        "13": "3.125rem"
      },
      fontSize: {
        "xsm": "16px",
        "s2xl": "22px"
      },
      borderRadius: {
        "xsm": "5px"
      }
    },
  },
  plugins: [],
}
