/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nothingyoucoulddo: ["Didot", "cursive"],
        signika: ["Didot", "sans-serif"],
      },
    },
  },
  plugins: [],
};
