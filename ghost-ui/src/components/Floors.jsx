import React from "react";
import Floor from "./Floor";

function Floors({ no_of_floors, no_of_spaces, people_coordinates }) {
  let a = [0, 0, 0, 0, 0];
  return (
    <div className="floors">
      {a.map((item, index) => (
        <Floor
          no_of_spaces={no_of_spaces}
          no_of_floors={no_of_floors}
          people_coordinates={people_coordinates}
          floor_no={no_of_floors - index - 1}
        />
      ))}
    </div>
  );
}

export default Floors;
