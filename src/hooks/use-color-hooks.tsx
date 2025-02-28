import { useContext } from "react";
import { ColorContext } from "../context/color-context-provider";

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error(
      "useColorContext must be used within a ColorContextProvider"
    );
  }
  return context;
};
