/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1132': '1332px',
        '1051': '1051px',
        '464': '464px',
        '491': '491px',
        '523': '523px',
        '203': '203px',
        '166': '166px',
        '287': '287px',
        '358': '358px'
      },
      colors: {
        'HappyYipee': '#ffc017',
        'LynxWhite': '#F6F7F8',
        'paleBlack':'#222'
      },
      fontFamily: {
        'releway': ['Raleway', "sans-serif"],
        'Cabin': ['Cabin', "sans-serif"]
      },
      spacing: {
        '60': '60px',
        '300': '300px'
      },
      borderRadius: {
        '10': '10px',
        '40':'40px'
      },
      backgroundSize: {
        '200': '500px'
      },
      lineHeight: {
        '100': '100px'
      },
      gap: {
        '76': '76px'
      },
      fontSize: {
        '17':'17px'
      }

    },
  },
  plugins: [],
}