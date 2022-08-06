/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-logo': "url('/public/background.jpeg')"
      }
    },
  },
  plugins: [],
};
