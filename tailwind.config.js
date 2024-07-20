/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["'DM Sans'", "'sans-serif'"],
        lato: ["'Lato'", "'sans-serif'"],
      },
    },
  },
  plugins: [],
};
