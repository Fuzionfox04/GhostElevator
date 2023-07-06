import React from "react";
import Space from "./space";

function Floor({
  no_of_spaces,
  no_of_floors,
  peopleCoordinates,
  updatePeopleCoordinates,
  floor_no,
}) {
  let b = [0, 0, 0, 0, 0, 0];
  return (
    <div className="floor">
      {b.map((item, index) => (
        <div className="space">
          <Space
            peopleCoordinates={peopleCoordinates}
            updatePeopleCoordinates={updatePeopleCoordinates}
            space_noo={index}
            floor_no={floor_no}
            index={index}
          ></Space>
        </div>
      ))}
    </div>
  );
}

export default Floor;
