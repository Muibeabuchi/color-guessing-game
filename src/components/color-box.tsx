import { useColor } from "../hooks/use-color-hooks";

const ColorBox = () => {
  const { state } = useColor();
  return (
    <div
      data-testid="colorBox"
      className="w-full h-40 rounded-lg shadow-md mb-6"
      style={{ backgroundColor: state.targetColor }} // This will be replaced with the actual color
    ></div>
  );
};

export default ColorBox;
