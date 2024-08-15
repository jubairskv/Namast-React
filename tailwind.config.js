/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gilroy: ['Gilroy', 'sans-serif'],
        GilroyRegular: ['Gilroy-Regular', 'sans-serif'],
        GilroyBold: ['Gilroy-Bold', 'sans-serif'],
        GilroyExtraBold: ['Gilroy-extraBold', 'sans-serif'],
        GilroySemiBold: ['Gilroy-semiBold', 'sans-serif'],
        GilroyMediumBold: ['Gilroy-mediumBold', 'sans-serif'],
      },
      colors:{
        "color-gray":"#484c5c",
        "color-graylight":"#9799a3",
      },
      backgroundImage: {
        'black-light-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      },
      
    },
  },
  plugins: [],
}