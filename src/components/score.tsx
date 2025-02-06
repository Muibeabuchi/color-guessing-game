import { useColor } from "../hooks/use-color-hooks";

const Score = () => {
  const { state } = useColor();
  return (
    <div className="text-2xl font-bold text-center mb-6" data-testid="score">
      Score: <span data-testid="score">{state.score}</span>
    </div>
  );
};

export default Score;
