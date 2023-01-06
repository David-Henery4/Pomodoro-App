/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    colors: {
      primaryRed: "#F87070",
      primaryAqua: "#70F3F8",
      primaryPurple: "#D881F8",
      baseWhite: "#FFFFFF",
      darkGrey: "#D7E0FF",
      lightGrey: "#EFF1FA",
      darkBlue: "#161932",
      lighterBlue: "#1E213F",
    },
    fontFamily: {
      kumbh: "Kumbh Sans, sans-serif",
      slab: "Roboto Slab, serif",
      space: "Space Mono, monospace",
    },
    extend: {},
  },
  plugins: [],
};
