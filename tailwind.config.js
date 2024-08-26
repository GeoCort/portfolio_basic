/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/public/images/adrien-olichon-_GH9LwhlSO4-unsplash.jpg')",
        "cat-cute":"url('/public/images/cat_cute.png')"
      }
    },
  },
  plugins: [],
}

