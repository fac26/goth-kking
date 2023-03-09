/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
      "green": "#abdec2",
      "black": "#161716"
      },
    },
  },
  plugins: [],

}

