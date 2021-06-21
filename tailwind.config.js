module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          600: '#E02041' //Destaque
        },
        gray: {
          300: '#A8A8B3', //Textos secundários
          400: '#737380', // Textos
          700: '#41414D', // Títulos secundários
          900: '#13131A', // Títulos primários
        },
      },      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
