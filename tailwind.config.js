/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: "#ecf3f5", // light white
        primary: "#f9a167", // dark orange
        // primary: "#fab383", // light orange
        secondary: "#3e356f", // the violet one
        // secondary: "#58575c",
        dark: "#2a2930",
        lightAccent: "#fab383",
        accent: "#5c5a68",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        caslon: ["Libre Caslon Display", "serif"],
        moda: ["Bodoni Moda", "serif"],
      },
    },
  },
  plugins: [],
};
