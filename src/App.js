import Canvas from "./components/Canvas";
import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import characters from "./locationData/locationData";

function App() {
  const [discoveredChar, setDiscoverChar] = useState([]);
  let hasWon = false;
  const getMousePosition = (e) => {
    const coords = [e.offsetX, e.offsetY];

    const checkIfWithinBox = (coords) => {
      console.log(coords);

      return characters.filter((char) => {
        if (
          coords[0] >= char.locationTopLeft[0] &&
          coords[0] <= char.locationBottomRight[0] &&
          coords[1] >= char.locationTopLeft[1] &&
          coords[1] <= char.locationBottomRight[1]
        ) {
          setDiscoverChar((oldArray) => [...oldArray, [char.name]]);
        }
      });
    };
    checkIfWithinBox(coords);
  };

  useEffect(() => {
    document.addEventListener("click", getMousePosition, false);
  }, []);

  return (
    <div className="App">
      <Header chars={discoveredChar} hasWon={hasWon} />
      <Canvas />
    </div>
  );
}

export default App;
