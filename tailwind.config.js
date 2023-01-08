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
      lineGrey: "#E3E1E1",
      timerBaseColourOne: "#2E325A",
      timerBaseColourTwo: "#0E112A",
    },
    fontFamily: {
      kumbh: "Kumbh Sans, sans-serif",
      slab: "Roboto Slab, serif",
      space: "Space Mono, monospace",
    },
    extend: {
      boxShadow: {
        mainTimer: "50px 50px 100px #121530, -50px -50px 100px #272C5A",
      },
      fontSize: {
        mainHeading: "100px",
        secondaryHeading: "28px",
        fouthHeading: "13px",
      },
      letterSpacing: {
        mainHeading: "-5px",
        thirdHeading: "15px",
        fouthHeading: "5px",
      },
      screens: {
        smlTab: "39.37em",
      },
    },
  },
  plugins: [],
};
