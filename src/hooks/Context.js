import { useState, useContext, createContext } from "react";
import { modeData } from "../mode-data/modeData";
import { colorData } from "../settings-data/colorData";
import { fontData } from "../settings-data/fontData";
import { updateThemeData, updateModeData } from "../functions";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(modeData);
  const [themeData,setThemeData] = useState(colorData)
  const [font,setFont] = useState(fontData)
  //
  const [activeFont, setActiveFont] = useState("kumbh");
  const [newFont, setNewFont] = useState("");
  //
  const [activeTheme, setActiveTheme] = useState({id: 1,name: "Red"});
  const [newTheme, setNewTheme] = useState({});
  //
  const handleChangeMode = (id) => {
    const newModeData = updateModeData(id,modeData)
    setMode(newModeData);
  };
  //
  const handleChangeColor= (id) => {
    const newColorData = updateThemeData(id,colorData)
    setThemeData(newColorData)
  }
  //
  const resetWhenNotConfirmed = () => {
    const backToUnapplied = colorData.map((color) => {
      color.id === activeTheme.id
        ? (color.isActiveTheme = true)
        : (color.isActiveTheme = false);
      return color
    })
    setThemeData(backToUnapplied)
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
