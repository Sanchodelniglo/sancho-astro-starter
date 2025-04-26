/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 0, 0)',
        secondary: 'rgb(114, 112, 112)',
        background: 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [],
};