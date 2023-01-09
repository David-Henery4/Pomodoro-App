import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeFont, setActiveFont] = useState("kumbh");
  const [newFont,setNewFont] = useState("")
  const [currentTheme,setCurrentTheme] = useState("")
  const [newTheme,setNewTheme] = useState("")
  //
  
  //
  const setNewSettings = () => {
    setActiveFont(newFont)
  }
  return (
    <AppContext.Provider
      value={{
        setActiveFont,
        activeFont,
        setNewFont,
        setNewSettings
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {
  AppContext,
  AppProvider
}
