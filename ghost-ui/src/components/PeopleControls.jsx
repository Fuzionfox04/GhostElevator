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
          <h3
            className="Tooltip"
            data-title={
              "H: " + x.height + " cm \nW: " + x.weight + " kg\nBmi: " + x.bmi
            }
          >
            {x.name}
          </h3>
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
