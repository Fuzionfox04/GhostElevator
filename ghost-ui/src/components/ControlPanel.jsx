import React from "react";
import LiftButtons from "./LiftButtons";
import PeopleControls from "./PeopleControls";

function ControlPanel({style, setStyle, setDoor}) {

  return (
    <div className="control-panel">
      <LiftButtons style={style} setStyle={setStyle} setDoor={setDoor}/>
      <PeopleControls />
    </div>
  );
}

export default ControlPanel;
