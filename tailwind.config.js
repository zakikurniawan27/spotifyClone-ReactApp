/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '1.5':'repeat(2, minmax(0, 0.2fr))',
        '1.7':'repeat(2, minmax(0, 0.2fr))',
        '2.5':'repeat(3, minmax(0, 0.4fr))'
      },
      gridAutoRows:{
        '1.5':'repeat(2, minmax(0, 0.5fr))',
      },
      gridTemplateRows:{
        '9':'repeat(9, minmax(0, 0.5fr))'
      },
      gridRow:{
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9'
      }
    },
  },
  plugins: [],
}

