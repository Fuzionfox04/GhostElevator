import React from "react";
import LiftButtons from "./LiftButtons";
import PeopleControls from "./PeopleControls";

function ControlPanel({ peopleCoordinates, updatePeopleCoordinates }) {
  return (
    <div className="control-panel">
      <LiftButtons />
      <PeopleControls
        peopleCoordinates={peopleCoordinates}
        updatePeopleCoordinates={updatePeopleCoordinates}
      />
    </div>
  );
}

export default ControlPanel;
