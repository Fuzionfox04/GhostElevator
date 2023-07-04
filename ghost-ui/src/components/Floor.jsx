import React from "react";

function Floor({ no_of_spaces, no_of_floors, people_coordinates, floor_no }) {
  let b = [0, 0, 0, 0, 0, 0];
  return (
    <div className="floor">
      {b.map((item, index) => (
        <div className="space" floor_no={floor_no} space={index}>
          hi
        </div>
      ))}
    </div>
  );
}

export default Floor;
