import colors from "../data/colors";
import { ActionType, colorType, GameData } from "../types/color-types";

export function pickRandomColors(
  colors: colorType[],
  numColors: number = 6
): colorType[] {
  if (numColors > colors.length) {
    throw new Error(
      "Number of colors to pick cannot exceed the total number of colors."
    );
  }

  const shuffledColors = [...colors]; // Create a copy to avoid modifying the original array

  // Fisher-Yates shuffle algorithm for efficient randomization
  for (let i = shuffledColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledColors[i], shuffledColors[j]] = [
      shuffledColors[j],
      shuffledColors[i],
    ];
  }

  return shuffledColors.slice(0, numColors);
}

export function colorReducer(state: GameData, action: ActionType): GameData {
  switch (action.type) {
    case "resetColor": {
      const resetColors = pickRandomColors(colors);
      return {
        ...state,
        colors: resetColors,
        targetColor:
          resetColors[Math.floor(Math.random() * resetColors.length)],
        status: "idle",
        score: 0,
      };
    }

    case "resetStatus": {
      return {
        ...state,
        status: "idle",
      };
    }

    case "selectColor": {
      const resetColors = pickRandomColors(colors);
      if (action.payload === state.targetColor) {
        return {
          ...state,
          score: state.score + 5,
          status: "correct",
          colors: resetColors,
          targetColor:
            resetColors[Math.floor(Math.random() * resetColors.length)],
        };
      } else {
        return {
          ...state,
          score: state.score - 5,
          status: "wrong",
          colors: resetColors,
          targetColor:
            resetColors[Math.floor(Math.random() * resetColors.length)],
        };
      }
    }
    // default return state that throws error
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
