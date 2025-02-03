const ColorOptions = () => {
  // This array will be replaced with actual color options
  const colorOptions = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {colorOptions.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          className="w-full h-20 rounded-lg shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;
