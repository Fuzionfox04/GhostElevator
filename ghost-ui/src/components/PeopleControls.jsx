import React, { useState } from "react";

function PeopleControls() {
  const [selectedPerson, setSelectedPerson] = useState("E");
  return (
    <div>
      People Controls
      <button
        onClick={() => {
          setSelectedPerson("A");
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setSelectedPerson("B");
        }}
      >
        B
      </button>
      <button
        onClick={() => {
          setSelectedPerson("C");
        }}
      >
        C
      </button>
      <button
        onClick={() => {
          setSelectedPerson("D");
        }}
      >
        D
      </button>
      <button
        onClick={() => {
          setSelectedPerson("E");
        }}
      >
        E
      </button>
      <h1>{selectedPerson}</h1>
      <button>←</button>
      <button1>→</button1>
    </div>
  );
}

export default PeopleControls;
