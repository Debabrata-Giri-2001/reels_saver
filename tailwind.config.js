/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Pacifico': [ 'Satisfy', 'cursive'],
        'Comfortaa':['Comfortaa', 'cursive'],
        'Monoton': ['Monoton', 'cursive'],
        'Great-Vibes': ['Great Vibes', 'cursive'],
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Lilita': ['Lilita One', 'cursive'],
        'Secular':['Secular One','sans-serif']
      },
    },
  },
  plugins: [],
}
