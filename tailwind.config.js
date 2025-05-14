const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
     
      fontFamily: {
        julius: ['"Julius Sans One"', 'sans-serif'],
        robotoSerif: ['"Roboto Serif"', 'serif'],
      },
    },
  },
  plugins: [heroui()],
};

