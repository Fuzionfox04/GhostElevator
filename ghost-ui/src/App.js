import "./App.css";
import Floors from "./components/Floors";

function App() {
  let no_of_floors = 5;
  let no_of_spaces = 6;

  return (
    <div className="App main-grid">
      <div className="main-grid-item">
        <Floors no_of_floors={no_of_floors} no_of_spaces={no_of_spaces} />
      </div>
      <div className="main-grid-item elevator-shaft"></div>
      <div className="main-grid-item control-panel"></div>
    </div>
  );
}

export default App;
