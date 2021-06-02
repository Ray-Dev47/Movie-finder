module.exports = {
  
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        customHeight: '600px',
      },
      container: {
        marginTop: '-150px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}