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
           300:"#E5E5E5",
        },

      },
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
