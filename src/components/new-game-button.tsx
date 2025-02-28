import { useColor } from "../hooks/use-color-hooks";

const NewGameButton = () => {
  const { dispatch } = useColor();
  return (
    <button
      data-testid="newGameButton"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={() => dispatch({ type: "resetColor" })}
    >
      New Game
    </button>
  );
};

export default NewGameButton;
