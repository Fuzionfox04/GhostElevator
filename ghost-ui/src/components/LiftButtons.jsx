function LiftButtons({
  style,
  setStyle,
  setDoor,
  currentFloor,
  setCurrentFloor,
  no_of_floors,
  updateFloorno,
  peopleCoordinates,
}) {
  let totalWeight = 0;
  let weightLimit = 200;
  const checkWeight = (floor) => {
    totalWeight = 0;
    peopleCoordinates.map((person) => {
      if (person.space_no === 6) {
        console.log(person.name + ":" + totalWeight);
        console.log(typeof totalWeight);
        console.log(person.name + ":" + person.weight);
        console.log(typeof person.weight);
        totalWeight = totalWeight + person.weight;
        console.log(person.name + ":" + totalWeight);
      }
    });
    if (totalWeight < weightLimit) {
      moveElevator(floor);
    } else {
      alert("hi");
    }
  };

  function moveElevator(floor) {
    setCurrentFloor(floor);
    // Assuming each floor has a height of 100px
    const targetPosition = (no_of_floors - floor - 1) * 160;
    setStyle({
      transform: `translateY(${targetPosition}px)`,
      transitionDuration: "1s",
    });

    updateFloorno(floor);

    currentFloor = floor;
    setTimeout(() => {
      opendoor();
      setTimeout(() => {
        closedoor();
      }, 5000);
    }, 1000);
  }
  function opendoor() {
    setDoor(true);
  }
  function closedoor() {
    setDoor(false);
  }
  return (
    <div>
      <div class="floor1">
        <button
          class="btn-floor"
          floor="0"
          onClick={() => {
            checkWeight(0);
          }}
        >
          G
        </button>
        <button
          class="btn-floor"
          floor="1"
          onClick={() => {
            checkWeight(1);
          }}
        >
          1
        </button>
        <button
          class="btn-floor"
          floor="2"
          onClick={() => {
            checkWeight(2);
          }}
        >
          2
        </button>
        <button
          class="btn-floor"
          floor="3"
          onClick={() => {
            checkWeight(3);
          }}
        >
          3
        </button>
        <button
          class="btn-floor"
          floor="4"
          onClick={() => {
            checkWeight(4);
          }}
        >
          4
        </button>
        <button class="btn-floor" onClick={opendoor}>
          open
        </button>
        <button class="btn-floor" onClick={closedoor}>
          close
        </button>
      </div>
    </div>
  );
}

export default LiftButtons;
