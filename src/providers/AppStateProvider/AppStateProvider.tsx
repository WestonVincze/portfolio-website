import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import { Globals } from "react-spring";
import { useReducedMotion } from "react-spring";
import { useStyle } from "@hooks/useStyle";

export const AppStateContext = createContext<
  {
    reducedMotion: boolean | null;
    fontSize: number;
    lineHeight: number;
  } | undefined
>(undefined);

export const useAppState = () => {
  const appContext = useContext(AppStateContext);
  
  if (appContext === undefined) {
    throw new Error("useAppState must be wrapped within an AppStateProvider");
  }

  return appContext;
};

interface AppStateProviderProps {
  children: ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const reducedMotion = useReducedMotion();
  const fontSize = useStyle("font-size", 16);
  const lineHeight = useStyle("--line-height", 1.5);

  // skip all react-spring animations if user prefers reduced motion
  useEffect(() => {
    Globals.assign({
      skipAnimation: reducedMotion === true,
    });

    return () => {
      Globals.assign({
        skipAnimation: false,
      });
    };
  }, [reducedMotion]);

  return (
    <AppStateContext.Provider
      value={{
        reducedMotion,
        fontSize,
        lineHeight,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
