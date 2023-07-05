import React from "react";
import Floor from "./Floor";

function Floors({
  no_of_floors,
  no_of_spaces,
  peopleCoordinates,
  updatePeopleCoordinates,
}) {
  let a = [0, 0, 0, 0, 0];
  return (
    <div className="floors">
      {a.map((item, index) => (
        <Floor
          no_of_spaces={no_of_spaces}
          no_of_floors={no_of_floors}
          peopleCoordinates={peopleCoordinates}
          updatePeopleCoordinates={updatePeopleCoordinates}
          floor_no={no_of_floors - index - 1}
        />
      ))}
    </div>
  );
}

export default Floors;
