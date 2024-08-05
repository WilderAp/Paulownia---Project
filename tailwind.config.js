/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0C7333',
        secondary: '#6828B0',
        customGrey: '#707070',
        title: '#314E52',
        bgSection: '#FAFAFA',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [require('daisyui')],
};
