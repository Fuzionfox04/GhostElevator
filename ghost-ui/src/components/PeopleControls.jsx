import React from "react";

function PeopleControls({ peopleCoordinates, updatePeopleCoordinates }) {
  return (
    <div>
      {peopleCoordinates.map((x) => (
        <>
          {" "}
          <button
            className="people-button"
            onClick={() => updatePeopleCoordinates(x.name, "←")}
          >
            {x.name}←
          </button>{" "}
          <button
            className="people-button"
            onClick={() => updatePeopleCoordinates(x.name, "→")}
          >
            {" "}
            {x.name}→
          </button>{" "}
        </>
      ))}
    </div>
  );
}

export default PeopleControls;
