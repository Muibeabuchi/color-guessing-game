import Game from "./components/game";
import ColorContextProvider from "./context/color-context-provider";

const App = () => {
  return (
    <ColorContextProvider>
      <div className="App">
        <Game />
      </div>
    </ColorContextProvider>
  );
};

export default App;
