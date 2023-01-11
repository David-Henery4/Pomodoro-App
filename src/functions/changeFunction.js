export const updateThemeData = (id, data) => {
  return data.map((color) => {
    color.id === id
      ? (color.isActiveTheme = true)
      : (color.isActiveTheme = false);
    return color;
  });
};

export const updateModeData = (id, data) => {
  return data.map((mode) => {
    mode.id === id ? (mode.isModeActive = true) : (mode.isModeActive = false);
    return mode;
  });
}

export const updateFontData = (id,data) => {
  return data.map((font) => {
    font.id === id ? (font.isActiveFont = true) : (font.isActiveFont = false);
    return font;
  });
}


