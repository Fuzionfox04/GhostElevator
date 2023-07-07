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
  const [fix, setFix] = useState(false);

  const [peopleCoordinates, setPeopleCoordinates] = useState([]);

  useEffect(() => {
    fetch("https://team1-ghostelevator.azurewebsites.net/api/employee", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((emp) => {
        setPeopleCoordinates(emp);
        setFix(!fix);
      });
  }, []);
  console.log(peopleCoordinates);

  useEffect(() => {
    setPeopleCoordinates(
      peopleCoordinates.map((person, index) => {
        let temp = {
          name: person.name,
          floor_no: 0,
          space_no: index,
          weight: person.weight,
          height: person.height,
          officefloor: person.officefloor,
          id: person.id,
          bmi: Math.round(
            (person.weight / person.height / person.height) * 10000
          ),
        };
        return temp;
      })
    );
  }, [fix]);

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
