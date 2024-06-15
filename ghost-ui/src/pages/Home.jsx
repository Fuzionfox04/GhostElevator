import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <ol>
        <li></li>
      </ol>
      <button class="btn-floor" onClick={() => navigate("/elevator")}>
        elevator
      </button>
    </div>
  );
}

export default Home;
