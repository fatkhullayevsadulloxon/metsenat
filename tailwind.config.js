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
        'blue-light-700': '#28293D',
        "gray-light": '#2E384D',
        'gray-light-200': "rgba(224, 231, 255, 0.20)",
        'gray-light-500': "#F1F1F3",
        'gray-light-300': "#E8E8E8",
        'gray-light-400': "#EDF1FD",
        'gray-light-600': "#7A7A9D",
        'gray-light-700': "#B2B7C1",
        'gray-light-800': "#B1B1B8",
        'success': '#00AE69',
        'orange': '#FFA445'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'rubik': ['Rubik'],
        'pro-bold': ['Pro-bold']
      },
      margin: {
        '5.5': '22px',
      },
      padding: {
        '13': '55px',
      },
      letterSpacing: {
        '1.25': '1.125px',
      },
      fontSize:{
        sm: '15px'
      },
      maxWidth:{
        '222': "222px"
      }
    },
  },
  plugins: [],
}

