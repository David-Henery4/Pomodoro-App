import { useState, useContext, createContext } from "react";
import { modeData } from "../mode-data/modeData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(modeData);
  //
  const [activeFont, setActiveFont] = useState("kumbh");
  const [newFont, setNewFont] = useState("");
  //
  const [activeTheme, setActiveTheme] = useState("Red");
  const [newTheme, setNewTheme] = useState("");
  //
  const handleChangeMode = (id) => {
    const newModeData = modeData.map((mode) => {
      mode.id === id ? (mode.isModeActive = true) : (mode.isModeActive = false);
      return mode;
    });
    setMode(newModeData);
  };
  //
  const resetWhenNotConfirmed = () => {
    
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
