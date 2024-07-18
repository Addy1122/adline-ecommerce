/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}