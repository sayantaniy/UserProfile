/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        crimson: ['"Crimson Text"', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
        instrument: ['"Instrument Sans"', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        google: ['"Google Sans"', 'sans-serif'],
        playwrite: ['"Playwrite US Trad Guides"', 'cursive'],
      },
    },
  },
  plugins: [],
}
