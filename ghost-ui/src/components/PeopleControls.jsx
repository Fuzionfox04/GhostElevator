import React from "react";

function PeopleControls({ peopleCoordinates, updatePeopleCoordinates }) {
  return (
    <div className="control-btn">
      {peopleCoordinates.map((x) => (
        <div>
          {" "}
          <button
            className="people-button"
            onClick={() => updatePeopleCoordinates(x.name, "←")}
          >
            ←
          </button>
          <h3>{x.name}</h3>
          <button
            className="people-button"
            onClick={() => updatePeopleCoordinates(x.name, "→")}
          >
            {" "}
            →
          </button>{" "}
        </div>
      ))}
    </div>
  );
}

export default PeopleControls;
