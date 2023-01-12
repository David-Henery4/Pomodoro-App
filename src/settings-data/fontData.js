const fontData = [
  {
    id: 1,
    fontName: "font-kumbh",
    isActive: true,
  },
  {
    id: 2,
    fontName: "font-slab",
    isActive: false,
  },
  {
    id: 3,
    fontName: "font-space",
    isActive: false,
  },
];

// const handleFontChange = (fontId) => {
//   fontData.forEach((font) => {
//     if (fontId === font.id) font.isActiveFont = true;
//     if (fontId !== font.id) font.isActiveFont = false;
//   });
// };

export {
  fontData,
  // handleFontChange
}
