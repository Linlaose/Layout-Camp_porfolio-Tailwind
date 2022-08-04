/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'profile': '324px',
        '100': '100px',
      },
      height: {
        'profile': '324px',
      },
      spacing: {
        '5': '5px',
        '7': '7px',
        '13': '13px',
        '13.5': '13.5px',
        '14': '14px',
        '17': '17px',
        '23': '23px',
      },
      fontSize: {
        'h1-fontSize': '80px',
        'h2-fontSize': '32px',
      },
      lineHeight: {
        '1.2': '1.2',
      },
      maxWidth: {
        'container-1200': '1200px',
        'container-996': '996px',
      },
      backgroundColor: {
        'blueGray': '#415165',
      },
      borderColor: {
        'blueGray-400': '#96A9C4',
      }
    },
  },
  plugins: [],
}
