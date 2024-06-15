/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md-pink': '0px 4px 10px rgba(255, 192, 203)', 
      },
    },
  },
  plugins: [],
}