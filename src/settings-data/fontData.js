const fontData = [
  {
    id: 1,
    fontName: "kumbh",
    isActiveFont: true,
  },
  {
    id: 2,
    fontName: "slab",
    isActiveFont: false,
  },
  {
    id: 3,
    fontName: "space",
    isActiveFont: false,
  },
];

const handleFontChange = (fontId) => {
  fontData.forEach((font) => {
    if (fontId === font.id) font.isActiveFont = true;
    if (fontId !== font.id) font.isActiveFont = false;
  });
};

export {
  fontData,
  handleFontChange
}
