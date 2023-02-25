const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        verbio: {
          main: '#ff1f58',
          mainDark: '#E52052',
          secondaryLight: '#0CDDB8',
          secondaryDark: '#0BC7A6',
        }
      }
    }
  },
  plugins: []
}
