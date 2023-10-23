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
        '464': '464px',
        '287': '287px'
      },
      colors: {
        'HappyYipee': '#ffc017'
      },
      fontFamily: {
        'releway': ['Raleway', "sans-serif"],
        'Cabin': ['Cabin', "sans-serif"]
      },
      spacing: {
        '60': '60px'
      },
      borderRadius: {
        '10': '10px'
      },
      backgroundImage: {
        'bg-img': "url('./assets/bg-img.png')"
      },
      backgroundSize: {
        '200': '500px'
      },
      lineHeight: {
        '100': '100px'
      },
      gap:{
        '76':'76px'
      }

    },
  },
  plugins: [],
}