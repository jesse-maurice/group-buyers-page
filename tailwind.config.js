/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 40px 70px rgba(0, 0, 0, 0.60)',
      }
      
    },
  },
  plugins: [],
} 