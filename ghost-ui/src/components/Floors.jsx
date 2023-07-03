import React from "react";
import Floor from "./Floor";

function Floors({ no_of_floors, no_of_spaces }) {
  return (
    <div className="floors">
      {Array(no_of_floors).fill(<Floor no_of_spaces={no_of_spaces} />)}
    </div>
  );
}

export default Floors;
