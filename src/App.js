import Canvas from "./components/Canvas";
import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import characters from "./locationData/locationData";
import HighScoreForm from "./components/HighScoreForm";
import HighScores from "./components/HighScores";

function App() {
  const [chars, setChars] = useState([]);
  const [isGameOver, setGameOver] = useState(false);

  const getMousePosition = (e) => {
    const coords = [e.offsetX, e.offsetY];

    characters.filter((char) => {
      if (
        coords[0] >= char.locationTopLeft[0] &&
        coords[0] <= char.locationBottomRight[0] &&
        coords[1] >= char.locationTopLeft[1] &&
        coords[1] <= char.locationBottomRight[1]
      ) {
        console.log(true);
        updateArray(char.name);
      }
    });
  };

  const updateArray = (element) => {
    setChars((prevArray) => [...prevArray, element]);
  };

  const checkGameOver = () => {
    if (
      chars.includes("Wally") &&
      chars.includes("Yllaw") &&
      chars.includes("Wizard")
    ) {
      setGameOver((isGameOver) => !isGameOver);
    }
  };

  useEffect(() => {
    console.log(chars);
    checkGameOver();
  }, [chars]);

  useEffect(() => {
    document.addEventListener("click", getMousePosition, false);
  }, []);

  return (
    <div className="App">
      <Header chars={chars} isGameOver={isGameOver} />
      <Canvas />
    </div>
  );
}

export default App;
