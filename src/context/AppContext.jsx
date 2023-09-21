import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [section, setSection] = useState(0);

  const value = {
    openMenu,
    setOpenMenu,
    section,
    setSection,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
