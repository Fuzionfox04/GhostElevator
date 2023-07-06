import React, { useEffect, useState } from "react";

function LiftShaft({
  style,
  door,
  peopleCoordinates,
  updatePeopleCoordinates,
}) {
  const [sty, setSty] = useState({
    transform: `translateX(-80px)`,
    transitionDuration: "2s",
  });
  const [sty1, setSty1] = useState({
    transform: `translateX(0px)`,
    transitionDuration: "2s",
  });
  useEffect(() => {}, []);
  return (
    <div className="main-ele">
      <div class="elevator-car" style={style}>
        {peopleCoordinates.map((person) =>
          person.space_no === 6 ? <h4>{person.name}</h4> : ""
        )}
        <div class="door" style={door ? sty : sty1} />
      </div>
    </div>
  );
}

export default LiftShaft;
