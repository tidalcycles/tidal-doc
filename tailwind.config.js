module.exports = {
  corePlugins: { preflight: false, container: false },
  important: '#tailwind',
  purge: ['./src/**/*.js', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
