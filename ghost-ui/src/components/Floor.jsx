import React from "react";

function Floor({ no_of_spaces }) {
  return (
    <div className="floor">
      {Array(no_of_spaces).fill(<div className="space">hi</div>)}
    </div>
  );
}

export default Floor;
