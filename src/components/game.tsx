import ColorBox from "./color-box";
import ColorOptions from "./color-options";
import GameInstructions from "./game-instructions";
import GameStatus from "./game-status";
import Score from "./score";
import NewGameButton from "./new-game-button";

const Game = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Color Guessing Game
        </h1>
        <ColorBox />
        <GameInstructions />
        <GameStatus />
        <ColorOptions />
        <Score />
        <NewGameButton />
      </div>
    </div>
  );
};

export default Game;
