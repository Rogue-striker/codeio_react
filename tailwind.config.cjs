module.exports = {
  mode : "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#282a36',
        'purple' : '#bd93f9',
      },
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}