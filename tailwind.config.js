/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '1.5':'repeat(2, minmax(0, 0.2fr))'
      }
    },
  },
  plugins: [],
}

