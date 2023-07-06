import React from "react";
import { useNavigate } from "react-router-dom";

function Log() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button class="btn-floor" onClick={() => navigate("/elevator")}>
        elevator
      </button>
    </div>
  );
}

export default Log;
