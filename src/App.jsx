// Write your Color component here
import { useState } from "react";

const Color = ({ color, setSelectedColor, selectedColor }) => {
  const isSelected = selectedColor === color;

  console.log(
    `Color: ${color}, Selected: ${selectedColor}, IsSelected: ${isSelected}`
  );

  return (
    <div
      onClick={() => setSelectedColor(color)}
      className={`${color} ${isSelected ? "selected" : ""}`}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
