import { useColor } from "../hooks/use-color-hooks";

const GameStatus = () => {
  const { state } = useColor();
  return (
    <div
      data-testid="gameStatus"
      // TODO: Dynamically update color of the status message
      // border should be gray and background should be a destructive color if the status is wrong and a success color if the status is correct with a whitish text color
      className="text-xl border-2 border-gray-300  mx-auto px-7 py-6 flex items-center justify-center rounded-xl text-white font-semibold text-center mb-6 h-8"
      style={{
        backgroundColor:
          state.status === "correct"
            ? "green"
            : state.status === "wrong"
            ? "red"
            : "gray",
      }}
    >
      {state.status === "idle"
        ? "Pick a color"
        : state.status === "correct"
        ? "CORRECT"
        : "WRONG"}
    </div>
  );
};

export default GameStatus;
