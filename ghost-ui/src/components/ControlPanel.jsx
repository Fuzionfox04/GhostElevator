import React from "react";
import LiftButtons from "./LiftButtons";
import PeopleControls from "./PeopleControls";

function ControlPanel({
  style,
  setStyle,
  setDoor,
  peopleCoordinates,
  updatePeopleCoordinates,
  currentFloor,
  setCurrentFloor,
}) {
  return (
    <div className="control-panel">
      <LiftButtons
        style={style}
        setStyle={setStyle}
        setDoor={setDoor}
        currentFloor={currentFloor}
        setCurrentFloor={setCurrentFloor}
      />
      <PeopleControls
        peopleCoordinates={peopleCoordinates}
        updatePeopleCoordinates={updatePeopleCoordinates}
      />
    </div>
  );
}

export default ControlPanel;
