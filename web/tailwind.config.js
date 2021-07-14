module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        githubTheme: {
          blue100: "#52A8F2",
          blue200:"#2561D9",
          blue300:"#26358C",
          black: "#1D2126",
          green: "#327330"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
