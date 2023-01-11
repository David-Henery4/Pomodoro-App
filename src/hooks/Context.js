import { useState, useContext, createContext } from "react";
import { modeData } from "../mode-data/modeData";
import { colorData } from "../settings-data/colorData";
import { fontData } from "../settings-data/fontData";
import updateData from "../functions/changeFunction";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(modeData);
  const [themeData,setThemeData] = useState(colorData)
  const [font,setFont] = useState(fontData)
  //
  const [activeFont, setActiveFont] = useState({id: 1,name:"kumbh"});
  const [newFont, setNewFont] = useState({});
  //
  const [activeTheme, setActiveTheme] = useState({id: 1,name: "Red"});
  const [newTheme, setNewTheme] = useState({});
  //
  const handleChangeMode = (id) => {
    const newModeData = updateData(id,modeData)
    setMode(newModeData);
  };
  //
  const handleChangeColor= (id) => {
    const newColorData = updateData(id,colorData)
    setThemeData(newColorData)
  }
  const handleChangeFont = (id) => {
    const newFontData = updateData(id, fontData)
    setFont(newFontData)
  }
  //
  const resetWhenNotConfirmed = () => {
    const backToUnapplied = updateData(activeTheme.id,colorData);
    const backToUnappliedFont = updateData(activeFont.id,fontData);
    setThemeData(backToUnapplied)
    setFont(backToUnappliedFont)
  };
  //
  const setNewSettings = () => {
    setActiveFont(newFont);
    setActiveTheme(newTheme);
  };
  return (
    <AppContext.Provider
      value={{
        setActiveFont,
        activeFont,
        setNewFont,
        setNewSettings,
        setNewTheme,
        activeTheme,
        setActiveTheme,
        mode,
        handleChangeMode,
        handleChangeColor,
        themeData,
        resetWhenNotConfirmed,
        handleChangeFont,
        font
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
