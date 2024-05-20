/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '110': '27.5rem',
        '75' : '18.75rem',
      },
      height:{
        '144' : '36rem',
      },
      borderRadius: {
        '5xl' : '3.5rem'
      },
      backgroundImage: theme => ({
        'url-img': "url('/dist/bg_blue.jpg')",
      }),
    },
  },
  plugins: [],
}
