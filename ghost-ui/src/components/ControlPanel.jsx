import React from "react";
import LiftButtons from "./LiftButtons";
import PeopleControls from "./PeopleControls";

function ControlPanel() {
  return (
    <div className="control-panel">
      <LiftButtons />
      <PeopleControls />
    </div>
  );
}

export default ControlPanel;
