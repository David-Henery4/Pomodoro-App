import { useState, useContext, createContext } from "react";
import { modeData } from "../mode-data/modeData";
import { colorData } from "../settings-data/colorData";
import { fontData } from "../settings-data/fontData";
import updateData from "../functions/changeFunction";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState({
    id: 1,
    mode: "pomodoro",
    isActive: true,
    timerMins: 1,
    timerSecs: 0,
  });
  //
  const [mode, setMode] = useState(modeData);
  const [preAppliedMode, setPreAppliedMode] = useState(modeData);
  //
  const [themeData, setThemeData] = useState(colorData);
  const [font, setFont] = useState(fontData);
  //
  const [activeFont, setActiveFont] = useState({ id: 1, name: "kumbh" });
  const [newFont, setNewFont] = useState({});
  //
  const [activeTheme, setActiveTheme] = useState({ id: 1, name: "Red" });
  const [newTheme, setNewTheme] = useState({});
  //
  const handleChangeMode = (id) => {
    const newModeData = updateData(id, mode);
    setMode(newModeData);
    setActiveMode(mode.find((item) => item.id === id));
  };
  //
  const handleChangeColor = (id) => {
    const newColorData = updateData(id, colorData);
    setThemeData(newColorData);
  };
  const handleChangeFont = (id) => {
    const newFontData = updateData(id, fontData);
    setFont(newFontData);
  };
  //
  const resetWhenNotConfirmed = () => {
    const backToUnapplied = updateData(activeTheme.id, colorData);
    const backToUnappliedFont = updateData(activeFont.id, fontData);
    setThemeData(backToUnapplied);
    setFont(backToUnappliedFont);
    setPreAppliedMode(mode)
  };
  //
  const setNewSettings = () => {
    setActiveFont(newFont);
    setActiveTheme(newTheme);
    setMode(preAppliedMode)
    setActiveMode(preAppliedMode.find(item => item.id === activeMode.id))
  };
  //
  const handleMinsChange = (id) => {
    setActiveMode({ ...activeMode, timerMins: activeMode.timerMins - 1 });
  };
  //
  const resetMins = (id) => {
    setActiveMode(modeData.find((item) => item.id === id));
  };
  //
  const handleChangeMinsSettings = (id, type) => {
    const newArray = JSON.parse(JSON.stringify(preAppliedMode))
    const newMinsChanges = newArray.map((item) => {
      if (item.id === id && type === "INC") {
        item.timerMins = item.timerMins + 1;
      }
      if (item.id === id && type === "DEC") {
        item.timerMins = item.timerMins -1 ;
      }
      return item;
    });
    setPreAppliedMode(newMinsChanges)
  };
  //
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
        font,
        activeMode,
        handleMinsChange,
        resetMins,
        preAppliedMode,
        handleChangeMinsSettings,
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
