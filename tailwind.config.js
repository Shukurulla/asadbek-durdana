/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wedding-white": "#ffffff",
        "wedding-ivory": "#fefdf8",
        "wedding-champagne": "#f7e7ce",
        "wedding-blush": "#fdf2f2",
        "wedding-gold": "#d4a574",
        "wedding-rose": "#f7c6c7",
        "wedding-sage": "#b8c5b8",
        "wedding-text": "#4a4a4a",
        "wedding-accent": "#8b7355",
      },
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
        serif: ["Playfair Display", "serif"],
        elegant: ["Crimson Text", "serif"],
      },
    },
  },
  plugins: [],
};
