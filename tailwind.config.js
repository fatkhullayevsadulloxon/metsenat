/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,vue,jsx,tsx,js}'],
  theme: {
    extend: {
      colors: {
        'black': '#1D1D1F',
        'white': '#fff',
        'blue': '#36F',
        'blue-light': '#E0E7FF',
        'blue-light-200': '#2E5BFF',
        "gray-light": '#2E384D',
        'gray-light-200': "rgba(224, 231, 255, 0.20)"
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'rubik': ['Rubik']
      },
      margin: {
        '5.5': '22px',
      }
    },
  },
  plugins: [],
}

