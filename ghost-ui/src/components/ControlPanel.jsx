import React from "react";
import LiftButtons from "./LiftButtons";
import PeopleControls from "./PeopleControls";

function ControlPanel({style, setStyle, setDoor,peopleCoordinates, updatePeopleCoordinates }) {
  return (
    <div className="control-panel">
      <LiftButtons style={style} setStyle={setStyle} setDoor={setDoor}/>
      <PeopleControls
        peopleCoordinates={peopleCoordinates}
        updatePeopleCoordinates={updatePeopleCoordinates}
      />
    </div>
  );
}

export default ControlPanel;
