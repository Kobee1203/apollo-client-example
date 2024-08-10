/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-primeui')],
}

