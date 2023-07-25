/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
 fontFamily: {
      rale: ['Raleway'],
    },
    extend: {
      colors:{
        danger: '#ff5f40',
        info: {
          100: '#24a19c',
          200: '#6ebfb5'
        }
      }
    },
  },
  plugins: [],
}
