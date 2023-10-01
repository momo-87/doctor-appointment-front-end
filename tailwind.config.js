/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-green': '#97BF0F',
        'color-gray': '#E4E5E9',
        'color-aliceblue': '#F0F8FF',
        'twitter-blue': '#1D9BF0',
        'facebook-blue': '#3B5998',
        'pinterest-red': '#BD081C',
        'instagram-purple': '#C13584',
        'tiktok-black': '#000000',
      },
      fontFamily: {
        'montreal-serial-bold': ['montreal-serial-bold', 'sans-serif'],
        'montreal-serial-medium-regular': ['montreal-serial-medium-regular', 'sans-serif'],
        'montreal-serial-light-regular': ['montreal-serial-light-regular', 'sans-serif'],
      },
    },

  },
  plugins: [],
};
