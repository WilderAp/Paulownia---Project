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
        bgBox: '#F8F8F8',
      },
      borderRadius: {
        customRadius: '16px',
      },
      height: {
        btnMobileH: '42px',
        btnDesktopH: '48px',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
};
