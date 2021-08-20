module.exports = {
  purge: [
    "./components/Head.vue",
    "./components/Footer.vue",
    "./components/Logo.vue",
    "./layouts/default.vue",
    "./pages/index.vue",
    "./pages/about/index.vue",
    "./pages/experience/index.vue",
    "./pages/works/index.vue"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': '#ff7300',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
