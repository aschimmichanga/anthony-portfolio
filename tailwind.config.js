/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f7ed',
          100: '#b3e6cc',
          200: '#80d6aa',
          300: '#4dc588',
          400: '#1ab566',
          500: '#00a04d',
          600: '#008040',
          700: '#006033',
          800: '#004026',
          900: '#002019',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

