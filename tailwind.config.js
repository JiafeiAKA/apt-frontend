/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      scale: {
        '175' : '1.75',
        '200': '2',   
        '250': '2.5',
        '300': '3',
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      cinzel: ['Cinzel', 'serif'],
    },
  },
  plugins: [],
}

