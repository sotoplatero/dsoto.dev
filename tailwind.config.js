const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',  
  purge: {
    content: [
      './src/**/*.njk',
      './src/**/*.js',
      './src/**/*.svg',
      './src/**/*.md',
    ],
  },
  // plugins: [require('@tailwindcss/forms')],
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
    }
  },  
  theme: {
    extend: {
      fontFamily: {
        // inter: '"Inter", sans-serif;',
      },
    },
  }
};
