import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const AppContext = createContext<{
  section: number;
  setSection: Dispatch<SetStateAction<number>>;
} | null>(null);

type AppContextProviderProps = PropsWithChildren;

function AppContextProvider({ children }: AppContextProviderProps) {
  const [section, setSection] = useState(0);

  const value = {
    section,
    setSection,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("Context not defined here!");
  } else {
    return ctx;
  }
}

export default AppContextProvider;
