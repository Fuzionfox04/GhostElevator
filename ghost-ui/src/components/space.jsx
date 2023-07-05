import React from "react";

function Space({
  peopleCoordinates,
  updatePeopleCoordinates,
  space_noo,
  floor_no,
}) {
  return (
    <div>
      <h1>
        {peopleCoordinates.map((person) =>
          person.floor_no === floor_no && person.space_no === space_noo
            ? person.name
            : ""
        )}
      </h1>
    </div>
  );
}

export default Space;
