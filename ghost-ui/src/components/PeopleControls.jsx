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
          <h3>{x.name}</h3>
          <button onClick={() => navigate(`/employee/edit/${x.id}`)}>i</button>
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
