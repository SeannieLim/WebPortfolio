/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        customGreen: '#C7F6C7',
       
      },
      backgroundColor:{
        'github-color': '#2b3137'
      },
    },
  },
  plugins: [],
}

