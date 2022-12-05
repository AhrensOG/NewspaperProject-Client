/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: "'Oswald', sans-serif",
        roboto:"'Roboto Condensed', sans-serif",
        noto: "'Noto Serif', serif"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
