const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        'text-outline-width': value => {
          return {
            "-webkit-text-stroke-width": value
          }
        },
        'text-outline-color': value => {
          return {
            "-webkit-text-stroke-color": value
          }
        },
      })
    })
  ],
}

