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
    timerMins: 25,
    timerSecs: 0,
  });
  //
  const [key, setKey] = useState(0);
  //
  const [mode, setMode] = useState(modeData);
  const [preAppliedMode, setPreAppliedMode] = useState(modeData);
  //
  const [themeData, setThemeData] = useState(colorData);
  const [font, setFont] = useState(fontData);
  //
  const [activeFont, setActiveFont] = useState({
    id: 1,
    name: "font-kumbh",
    letterSpacing: "-tracking-[4px]",
  });
  const [newFont, setNewFont] = useState({});
  //
  const [activeTheme, setActiveTheme] = useState({
    id: 1,
    name: "bg-primaryRed",
    hex: "#F87070",
  });
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
    setPreAppliedMode(mode);
  };
  //
  const setNewSettings = () => {
    if (Object.entries(newFont).length > 1) {
      setActiveFont(newFont);
    }
    if (Object.entries(newTheme).length > 1) {
      setActiveTheme(newTheme);
    }
    setMode(preAppliedMode);
    setActiveMode(preAppliedMode.find((item) => item.id === activeMode.id));
  };
  //
  const handleTimeChange = () => {
    if (activeMode.timerMins >= 0) {
      setActiveMode({ ...activeMode, timerSecs: activeMode.timerSecs - 1 });
    }
    if (activeMode.timerSecs <= 0) {
      setActiveMode({
        ...activeMode,
        timerMins: activeMode.timerMins - 1,
        timerSecs: 59,
      });
    }
  };
  //
  const resetMinsAndSecs = (id) => {
    setActiveMode(mode.find((item) => item.id === id));
  };
  //
  const handleChangeMinsSettings = (id, type, minsValue) => {
    const newArray = JSON.parse(JSON.stringify(preAppliedMode));
    const newMinsChanges = newArray.map((item) => {
      if (item.id === id && type === "NEW") {
        item.timerMins = minsValue;
      }
      if (item.id === id && type === "INC") {
        const incrementedValue = item.timerMins + 1;
        incrementedValue >= 100
          ? (item.timerMins = 99)
          : (item.timerMins = incrementedValue);
      }
      if (item.id === id && type === "DEC") {
        const decrementedValue = item.timerMins - 1;
        decrementedValue <= 0
          ? (item.timerMins = 1)
          : (item.timerMins = decrementedValue);
      }
      return item;
    });
    setPreAppliedMode(newMinsChanges);
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
        handleTimeChange,
        resetMinsAndSecs,
        preAppliedMode,
        handleChangeMinsSettings,
        key,
        setKey,
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
