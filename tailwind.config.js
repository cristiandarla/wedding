/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        wedding: "#e7ebde",
        wedding_hover: "#d0d4c8"
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#e7ebde' },
          '100%': { backgroundColor: '#d0d4c8' },
        }
      },
      animation: {
        colorChange: 'colorChange 1s ease-in'
      }
    },
  },
  plugins: [],
}

