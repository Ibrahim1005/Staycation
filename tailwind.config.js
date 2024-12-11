/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: "#152C5B",
        },
        secondary: {
          DEFAULT: "#B0B0B0",
           200:"#ff498a",
        },

      },
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
