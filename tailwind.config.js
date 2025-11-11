import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/**/*.{js,ts,jsx,tsx}"
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
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#00a04d",
            foreground: "#ffffff",
          },
          focus: "#00a04d",
        },
      },
    },
  })],
};

