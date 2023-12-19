/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        background: "hsl(217, 19%, 24%)",
        screen: "hsl(217, 19%, 24%)"
      }
    },
  },
  plugins: [],
}

