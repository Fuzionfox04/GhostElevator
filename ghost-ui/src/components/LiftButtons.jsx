import React, { useEffect, useState } from "react";

function LiftButtons({
  style,
  setStyle,
  setDoor,
  currentFloor,
  setCurrentFloor,
  no_of_floors,
  updateFloorno,
  peopleCoordinates,
}) {
  console.log(no_of_floors);

  function moveElevator(floor, endPoint) {
    console.log(floor);
    setCurrentFloor(floor);
    // Assuming each floor has a height of 100px
    const targetPosition = (no_of_floors - endPoint - 1) * 140;
    setStyle({
      transform: `translateY(${targetPosition}px)`,
      transitionDuration: "1s",
    });
    updateFloorno(floor);
    setTimeout(() => {
      opendoor();
    }, 1000);
  }
  function moveElevator(floor) {
    console.log(floor);
    setCurrentFloor(floor);
    // Assuming each floor has a height of 100px
    const targetPosition = (no_of_floors - floor - 1) * 140;
    setStyle({
      transform: `translateY(${targetPosition}px)`,
      transitionDuration: "1s",
    });
    updateFloorno(floor);
    setTimeout(() => {
      opendoor();
    }, 1000);
  }
  function opendoor() {
    setDoor(true);
  }
  function closedoor() {
    setDoor(false);
  }
  useEffect(() => {
    var buttons = document.querySelectorAll(".floor button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        console.log(button);
      });
    });
  }, []);

  return (
    <div>
      <div class="floor">
        <button
          onClick={() => {
            moveElevator(0);
          }}
        >
          Floor G
        </button>
        <button
          onClick={() => {
            moveElevator(1);
          }}
        >
          Floor 1
        </button>
        <button
          onClick={() => {
            moveElevator(2);
          }}
        >
          Floor 2
        </button>
        <button
          onClick={() => {
            moveElevator(3);
          }}
        >
          Floor 3
        </button>
        <button
          onClick={() => {
            moveElevator(4);
          }}
        >
          Floor 4
        </button>
        <button onClick={opendoor}>open</button>
        <button onClick={closedoor}>close</button>
      </div>
    </div>
  );
}

export default LiftButtons;
