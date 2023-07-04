import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Floors from "./components/Floors";
import LiftShaft from "./components/LiftShaft";

function App() {
  let no_of_floors = 5;
  let no_of_spaces = 6;
  let people_coordinates = {
    A: { space_no: 0, floor_no: 0, content: "A" },
    B: { space_no: 1, floor_no: 0, content: "B" },
    C: { space_no: 2, floor_no: 0, content: "C" },
    D: { space_no: 3, floor_no: 0, content: "D" },
  };
  return (
    <div className="App main-grid">
      <div className="main-grid-item">
        <Floors
          no_of_floors={no_of_floors}
          no_of_spaces={no_of_spaces}
          people_coordinates={people_coordinates}
        />
      </div>
      <div className="main-grid-item elevator-shaft">
        <LiftShaft />
      </div>
      <div className="main-grid-item">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;
