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
      color:{
        "bg-color-gray":"#3d4152",
        "bg-color-graylight":"#9799a3"
      }
    },
  },
  plugins: [],
}