import { createContext, useCallback, useReducer } from "react";
import { ActionType, GameData } from "../types/color-types";
import { colorReducer, pickRandomColors } from "../lib/utils";
import colors from "../data/colors";

export const ColorContext = createContext<{
  state: GameData;
  dispatch: React.Dispatch<ActionType>;
} | null>(null);

const ColorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const randomizeColors = useCallback(() => {
    return pickRandomColors(colors);
  }, []);
  const initialState: GameData = {
    colors: randomizeColors(),
    targetColor: colors[Math.floor(Math.random() * colors.length)],
    score: 0,
    status: "idle",
  };

  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider
      value={{
        state: state,
        dispatch,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
