
const colorData = [
  {
    id: 1,
    name: "bg-primaryRed",
    isActive: true,
    hex: "#F87070",
  },
  {
    id: 2,
    name: "bg-primaryAqua",
    isActive: false,
    hex: "#70F3F8",
  },
  {
    id: 3,
    name: "bg-primaryPurple",
    isActive: false,
    hex: "#D881F8",
  },
];

// const handleSelectingActiveTheme = (id) => {
//   colorData.forEach((color) =>
//     color.id === id ? (color.isActiveTheme = true) : (color.isActiveTheme = false)
//   );
// };

export {
  colorData,
  // handleSelectingActiveTheme
}