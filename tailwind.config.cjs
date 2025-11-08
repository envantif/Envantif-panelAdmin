/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#234C6A',
        accent: '#FEB21A',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        zayiti: {
          primary: '#234C6A',
          secondary: '#FEB21A',
          accent: '#FEB21A',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
        },
      },
      'light',
      'dark',
    ],
  },
}
