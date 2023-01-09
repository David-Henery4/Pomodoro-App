import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeFont, setActiveFont] = useState(["kumbh", "slab", "space"]);
  const [activeFontNumber,setActiveFontNumber] = useState(0)
  return (
    <AppContext.Provider
      value={{
        setActiveFont,
        activeFont,
        activeFontNumber,
        setActiveFontNumber,
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
