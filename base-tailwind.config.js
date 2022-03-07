module.exports = {
  content: ['./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        'app-background': '#121010',
        'normal-text': '#fff'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ],
};
