import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Floors from "./components/Floors";
import LiftShaft from "./components/LiftShaft";
function App() {
  let no_of_floors = 5;
  let no_of_spaces = 6;
  const [currentFloor, setCurrentFloor] = useState(1);
  const [door, setDoor] = useState(false);

  const [peopleCoordinates, setPeopleCoordinates] = useState([
    { name: "🧍‍♂️", floor_no: 0, space_no: 0, endpoint: 1, weight: 50 , identifier:"red-tshirt"},
    { name: "🧍‍♀️", floor_no: 0, space_no: 1, endpoint: 2, weight: 50 , identifier:"purple-girl"},
    { name: "🕴", floor_no: 0, space_no: 2, endpoint: 3, weight: 50 , identifier:"billa"},
    { name: "⛹️‍♀️", floor_no: 0, space_no: 3, endpoint: 4, weight: 100, identifier:"basketboy" },
    { name: "💃", floor_no: 0, space_no: 4, endpoint: 3, weight: 100, identifier:"dancing-queen" },
  ]);

  const updateFloorno = (currentFloor) => {
    setPeopleCoordinates(
      peopleCoordinates.map((person) => {
        if (person.space_no === 6) {
          let temp = {
            name: person.name,
            floor_no: currentFloor,
            space_no: person.space_no,
          };
          return temp;
        } else {
          return person;
        }
      })
    );
  };

  const updateSpaceno = (direction, person) => {
    if (direction === "→") {
      if (person.space_no === 5) {
        if (person.floor_no === currentFloor) {
          if (door === true) {
            return person.space_no + 1;
          } else {
            return person.space_no;
          }
        } else {
          return person.space_no;
        }
      } else if (person.space_no === 6) {
        return person.space_no;
      } else {
        return person.space_no + 1;
      }
    } else if (direction === "←") {
      if (person.space_no === 0) {
        return person.space_no;
      } else if (person.space_no === 6) {
        if (door === true) {
          return person.space_no - 1;
        } else {
          return person.space_no;
        }
      } else {
        return person.space_no - 1;
      }
    }

    //direction === "→" ? person.space_no + 1 : person.space_no - 1;
  };

  const updatePeopleCoordinates = (name, direction) => {
    setPeopleCoordinates(
      peopleCoordinates.map((person) => {
        if (person.name === name) {
          let temp = {
            name: person.name,
            floor_no: person.floor_no,
            space_no: updateSpaceno(direction, person),
          };
          return temp;
        } else {
          return person;
        }
      })
    );
  };

  const [style, setStyle] = useState({});

  return (
    <div className="App main-grid">
      <div className="main-grid-item">
        <Floors
          no_of_floors={no_of_floors}
          no_of_spaces={no_of_spaces}
          peopleCoordinates={peopleCoordinates}
          updatePeopleCoordinates={updatePeopleCoordinates}
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
        />
      </div>
      <div className="main-grid-item elevator-shaft">
        <LiftShaft
          style={style}
          setStyle={setStyle}
          door={door}
          setDoor={setDoor}
          peopleCoordinates={peopleCoordinates}
          updatePeopleCoordinates={updatePeopleCoordinates}
        />
      </div>
      <div className="main-grid-item">
        <ControlPanel
          style={style}
          setStyle={setStyle}
          setDoor={setDoor}
          door={door}
          peopleCoordinates={peopleCoordinates}
          updatePeopleCoordinates={updatePeopleCoordinates}
          no_of_floors={no_of_floors}
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
          updateFloorno={updateFloorno}
        />{" "}
      </div>
    </div>
  );
}

export default App;
