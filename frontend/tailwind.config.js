/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 35px 60px -15px rgba(251, 191, 36, 0.15)',
      },

      colors: {
        'by1': '#f1ca01',
        'by2': '#a98e06',
        'by3': '#937b07',
        'by4': '#55490b',
        'bb1': '#101010',
        'bb2': '#1b1b1b',
        'bb3': '#888888',
      }
    },
  },
  plugins: [],
}
