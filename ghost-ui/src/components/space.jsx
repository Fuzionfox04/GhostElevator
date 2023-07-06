import React from "react";

function Space({
  peopleCoordinates,
  updatePeopleCoordinates,
  space_noo,
  floor_no,
  index
}) {
  return (
    <>
      
        {
        peopleCoordinates.map((person) =>(
          
          person.floor_no === floor_no && person.space_no === space_noo
            ? <h2 className={person.identifier}>{person.name}</h2>
            : ""
          
        ))}
      
    </>
  );
}

export default Space;
