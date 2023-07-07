import React from "react";
import LiftButtons from "./LiftButtons";
import PeopleControls from "./PeopleControls";

function ControlPanel({
  style,
  setStyle,
  setDoor,
  door,
  peopleCoordinates,
  updatePeopleCoordinates,
  currentFloor,
  setCurrentFloor,
  no_of_floors,
  updateFloorno,
}) {
  return (
    <div className="control-panel">
      <LiftButtons
        style={style}
        setStyle={setStyle}
        setDoor={setDoor}
        door={door}
        no_of_floors={no_of_floors}
        currentFloor={currentFloor}
        setCurrentFloor={setCurrentFloor}
        updateFloorno={updateFloorno}
        peopleCoordinates={peopleCoordinates}
      />
      <PeopleControls
        peopleCoordinates={peopleCoordinates}
        updatePeopleCoordinates={updatePeopleCoordinates}
      />
    </div>
  );
}

export default ControlPanel;
