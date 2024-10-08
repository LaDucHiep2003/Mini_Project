/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-1" : "#000000DE",
        "color-2" : "#FF792F",
        "color-3" : "#2CA6EB",
        "color-4" : "#5a6173",
        "color-5" : "#212121",
      },
      boxShadow : {
        "shadow-1" : "0px 6px 12px 0 rgba(0, 0 ,0 , 0.078)",
        "shadow-2" : "0px 6px 12px 0 rgba(0, 0 ,0 , .239)",
      },
      backgroundColor:{
        "bg-1" : 'hsla(0, 0%, 80%, 0.5)',
      }
    },
  },
  plugins: [],
}