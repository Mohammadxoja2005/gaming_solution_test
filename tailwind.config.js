/** @type {import('tailwindcss').Config} */ 

const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: { 
    colors: {
      primary: "#109CF1", 
      secondary: "#90A0B7",
      white: "#ffffff"
    },  

    extend: { 

    },
  },
  plugins: [
    plugin(({addComponents}) => {
      addComponents({
        '.btn_primary': {
          background: "black"
        }, 
        '.shadow_for': {
          boxShadow: '6px 0px 18px rgba(0, 0, 0, 0.06)'
        }
      })
    })
  ]

}