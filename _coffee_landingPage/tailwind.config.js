/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "12": "3.25rem",
      },
      colors: {
        Brown: "#2F2105",
        LightBrown: "#835E4C",
        Gold: "#FFBD7F",
        Sepia: "#A0583C",
        Albescent: "#F6EBDA",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
}
