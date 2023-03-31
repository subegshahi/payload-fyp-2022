/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E5F1FF",
          100: "#CCE4FF",
          200: "#99C9FF",
          300: "#66ADFF",
          400: "#3392FF",
          500: "#0077FF",
          600: "#005FCC",
          700: "#004799",
          800: "#003066",
          900: "#001833",
        },
      },

      fontFamily: {
        digit: ["Orbitron"],
      },
    },
  },
  plugins: [],
};
