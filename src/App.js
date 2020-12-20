import Canvas from "./components/Canvas";
import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import characters from "./locationData/locationData";

function App() {
  const getMousePosition = (e) => {
    const coords = [e.clientX, e.clientY];
    console.log(document.getBoundingClientRect().width);
    console.log(e.target.offsetLeft);
    const checkIfWithinBox = (coords) => {
      console.log(coords);

      return characters.filter((char) => {
        if (
          coords[0] >= char.locationTopLeft[0] &&
          coords[0] <= char.locationBottomRight[0] &&
          coords[1] >= char.locationTopLeft[1] &&
          coords[1] <= char.locationBottomRight[1]
        ) {
          return true;
        } else {
          return false;
        }
      });
    };
    checkIfWithinBox(coords);
  };

  useEffect(() => {
    console.log("on mount");
    document.addEventListener("click", getMousePosition, false);
  }, []);

  return (
    <div className="App">
      <Header />
      <Canvas />
    </div>
  );
}

export default App;
