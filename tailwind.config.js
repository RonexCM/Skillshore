/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#03103F",
        primary: "#2F5CFE",
        "primary-light": "#E1E7FF",
        accent: "#FFB72A",
        error: "#dc2626",
        "text-dark": "#32403B",
        nav1: "#CFDAFE",
        nav2: "#FFB72A",
        foot1: "#E1E7FF",
        foot2: "#2F5CFE",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
