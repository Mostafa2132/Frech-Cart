
import preline from 'preline/plugin';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
    
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors:{
        "primary":{
          100:"#cffafe",
          200:"#a5f3fc",
          300:"#67e8f9",
          400:"#22d3ee",
          500:"#06b6d4",
          600:"#0891b2",
          700:"#0e7490",
          800:"#155e75",
          900:"#164e63",
          950:"#083344"

        },
      },
      screens:{
   

        "2xl":"1320px",
      }
    },

 

  },
  // eslint-disable-next-line no-undef
  plugins: [preline],
  darkMode:"class"
}