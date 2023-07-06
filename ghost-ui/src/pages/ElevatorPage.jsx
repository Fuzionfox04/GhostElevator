import React from "react";
import { useState, useEffect } from "react";
import "./ElevatorPage.css";

import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Floors from "../components/Floors";
import LiftShaft from "../components/LiftShaft";
import ControlPanel from "../components/ControlPanel";

function ElevatorPage() {
  let no_of_floors = 5;
  let no_of_spaces = 6;
  const [currentFloor, setCurrentFloor] = useState(1);
  const [door, setDoor] = useState(false);

  const [peopleCoordinates, setPeopleCoordinates] = useState([
    {
      name: "🧍‍♂️",
      floor_no: 0,
      space_no: 0,
      endpoint: 1,
      weight: 50,
      height: 100,
      officefloor: 2,
      id: 1,
    },
    {
      name: "🧍‍♀️",
      floor_no: 0,
      space_no: 1,
      endpoint: 2,
      weight: 50,
      height: 110,
      officefloor: 3,
      id: 2,
    },
    {
      name: "🕴",
      floor_no: 0,
      space_no: 2,
      endpoint: 3,
      weight: 50,
      height: 120,
      officefloor: 4,
      id: 3,
    },
    {
      name: "⛹️‍♀️",
      floor_no: 0,
      space_no: 3,
      endpoint: 4,
      weight: 100,
      height: 130,
      officefloor: 1,
      id: 4,
    },
    {
      name: "💃",
      floor_no: 0,
      space_no: 4,
      endpoint: 3,
      weight: 101,
      height: 150,
      officefloor: 3,
      id: 5,
    },
  ]);

  useEffect(() => {
    setPeopleCoordinates(
      peopleCoordinates.map((person) => {
        let temp = {
          name: person.name,
          floor_no: person.floor_no,
          space_no: person.space_no,
          weight: person.weight,
          endpoint: person.endpoint,
          height: person.height,
          officefloor: person.officefloor,
          id: person.id,
          bmi: person.weight / (person.height * person.height),
        };
        return temp;
      })
    );
  }, []);

  console.log(peopleCoordinates);

  const updateFloorno = (currentFloor) => {
    setPeopleCoordinates(
      peopleCoordinates.map((person) => {
        if (person.space_no === 6) {
          let temp = {
            name: person.name,
            floor_no: currentFloor,
            space_no: person.space_no,
            weight: person.weight,
            endpoint: person.endpoint,
            height: person.height,
            officefloor: person.officefloor,
            id: person.id,
            bmi: person.bmi,
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
            weight: person.weight,
            endpoint: person.endpoint,
            height: person.height,
            officefloor: person.officefloor,
            id: person.id,
            bmi: person.bmi,
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

export default ElevatorPage;
