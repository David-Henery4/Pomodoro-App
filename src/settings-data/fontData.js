const fontData = [
  {
    id: 1,
    fontName: "font-kumbh",
    isActive: true,
    letterSpacing: "-tracking-[4px]",
  },
  {
    id: 2,
    fontName: "font-slab",
    isActive: false,
    letterSpacing: "tracking-[0px]",
  },
  {
    id: 3,
    fontName: "font-space",
    isActive: false,
    letterSpacing: "-tracking-[10px]",
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
