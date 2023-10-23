/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1132': '1132px',
      },
      colors: {
        'HappyYipee': '#ffc017'
      },
      fontFamily: {
        'releway': ['Raleway', "sans-serif"]
      },
      spacing: {
        '60': '60px'
      },
      borderRadius:{
        '10':'10px'
      }
    },
  },
  plugins: [],
}