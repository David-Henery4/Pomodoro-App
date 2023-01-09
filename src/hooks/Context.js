import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeFont, setActiveFont] = useState("kumbh");
  return (
    <AppContext.Provider
      value={{
        setActiveFont,
        activeFont,
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
