/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#1a3c34',
          secondary: '#f4a261',
        },
      },
    },
  },
  plugins: [],
};