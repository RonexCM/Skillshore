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
      },
      spacing: {
        "field-height": "46px",
        "field-width": "300px",
        "button-padding-x": "22px",
        "button-padding-y": "10px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
