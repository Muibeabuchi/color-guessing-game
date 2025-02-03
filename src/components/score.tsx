import { useColor } from "../hooks/use-color-hooks";

const Score = () => {
  const { state } = useColor();
  return (
    <div className="text-2xl font-bold text-center mb-6">
      Score: <span data-testid="score">{state.score}</span>
    </div>
  );
};

export default Score;
