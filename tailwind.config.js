/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     fontFamily: { 'Poppins': "Poppins",},
     fontFamily: { 'jetbrain': "JetBrains+Mono", },
     fontFamily: { 'Fira+Code': "Fira+Code", }
     
    },
  },
  plugins: [],
};
