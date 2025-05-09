/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // create custom classes like "font-headline", "font-subheadline", etc.
        headline: ["Merriweather", "serif"],
        subheadline: ["Poppins", "sans-serif"],
        content: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
