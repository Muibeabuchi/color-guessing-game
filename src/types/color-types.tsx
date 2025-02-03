import colors from "../data/colors";

export type colorType = (typeof colors)[number];

export interface GameData {
  colors: colorType[];
  targetColor: colorType;
  score: number;
  status: "correct" | "wrong" | "idle";
}

export type ActionType =
  | { type: "resetColor" }
  | { type: "resetStatus" }
  | { type: "selectColor"; payload: colorType };
