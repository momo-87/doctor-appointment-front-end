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
      'w-42': {
        width: '10.5rem',
      },
      'w-50': {
        width: '12.5rem',
      },
    },

  },
  plugins: [],
};
