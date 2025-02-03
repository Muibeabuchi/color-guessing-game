import { useColor } from "../hooks/use-color-hooks";
import { colorType } from "../types/color-types";

const ColorOptions = () => {
  // This array will be replaced with actual color options
  const { state, dispatch } = useColor();

  const handleClick = (payload: colorType) => {
    dispatch({ type: "selectColor", payload });
    setTimeout(() => {
      dispatch({ type: "resetStatus" });
    }, 1000);
  };
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {state.colors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          className="w-full h-20 rounded-lg shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;
