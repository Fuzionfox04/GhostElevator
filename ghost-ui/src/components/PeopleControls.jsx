import React from "react";
import { useNavigate } from "react-router-dom";

function PeopleControls({ peopleCoordinates, updatePeopleCoordinates }) {
  const navigate = useNavigate();

  return (
    <div className="control-btn">
      {peopleCoordinates.map((x) => (
        <div>
          {" "}
          <button
            className="people-button"
            onClick={() => updatePeopleCoordinates(x.name, "→")}
          >
            {" "}
            →
          </button>
          <div className="people-info">
            <h3 className="Tooltip" data-title={"W: " + x.weight + " kg"}>
              {x.name}
            </h3>
          </div>
          <button
            className="people-button"
            onClick={() => updatePeopleCoordinates(x.name, "←")}
          >
            ←
          </button>{" "}
        </div>
      ))}
    </div>
  );
}

export default PeopleControls;
