import React, { useEffect, useState } from "react";


function LiftButtons({style, setStyle, setDoor,no_of_floors}) {
  let currentFloor = 1;

function moveElevator(floor) {
   // Assuming each floor has a height of 100px
  const targetPosition = (no_of_floors-floor-1) * 140;
  setStyle(
    {
      transform: `translateY(${targetPosition}px)`,
      transitionDuration: "1s",
    });

    currentFloor = floor;
    setTimeout(() => {
      opendoor();
      setTimeout(() => {
        closedoor();
      }, 5000);
    }, 1000);
  }
  function opendoor() {
    setDoor(true);
  }
  function closedoor() {
    setDoor(false);
  }
  return (
    <div>
      <div class="floor1">
        <button  class="btn-floor" floor="0" onClick={()=>{
          moveElevator(0);
        }}>G</button>
        <button class="btn-floor" floor="1" onClick={()=>{
          moveElevator(1);
        }}>1</button>
        <button class="btn-floor" floor="2" onClick={()=>{
          moveElevator(2);
        }}>2</button>
        <button class="btn-floor" floor="3" onClick={()=>{
          moveElevator(3);
        }}>3</button>
        <button class="btn-floor" floor="4" onClick={()=>{
          moveElevator(4);
        }}>4</button>
        <button class="btn-floor" onClick={
          opendoor
        }>open</button>
        <button class="btn-floor" onClick={
          closedoor
        }>close</button>
      </div>
    </div>
  );
}

export default LiftButtons;
