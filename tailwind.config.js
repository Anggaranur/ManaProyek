/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'us': '475px',
      'sm': '600px',
      'md': '769px',
      'lg': '1023px',
    },
  },
  plugins: [],
}

