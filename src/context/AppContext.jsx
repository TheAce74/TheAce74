import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const [section, setSection] = useState(0);

  const value = {
    section,
    setSection,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
