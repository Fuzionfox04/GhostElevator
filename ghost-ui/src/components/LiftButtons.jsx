import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LiftButtons({
  style,
  setStyle,
  setDoor,
  door,
  currentFloor,
  setCurrentFloor,
  no_of_floors,
  updateFloorno,
  peopleCoordinates,
}) {
  const navigate = useNavigate();
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const [cardAccess, setCardAccess] = useState([]);
  const [toggleCardAccess, setToggleCardAccess] = useState(false);
  const [toggleGhost, setToggleGhost] = useState(false);
  const [ghostInterval, setGhostInterval] = useState(null);

  const Ghost = () => {
    if (ghostInterval != null) {
      clearInterval(ghostInterval);
      setGhostInterval(null);
    }

    setGhostInterval(
      setInterval(function () {
        moveElevator(Math.round(Math.random() * 4));
      }, 700)
    );
  };

  const getCardAccess = () => {
    let temp = [];
    peopleCoordinates.map((person) => {
      if (person.space_no === 6) {
        temp.push(person.officefloor);
      }
    });
    temp = removeDuplicates(temp.sort());
    console.log(temp);
    setCardAccess(temp);
  };

  const autoMove = () => {
    getCardAccess();
    console.log(cardAccess);
    for (let i in cardAccess) {
      let k = i;
      setTimeout(function () {
        console.log("count ", k);
        checkWeight(cardAccess[i]);
      }, 1000 * (k + 1));
    }
    closedoor();
  };
  let totalWeight = 0;
  let weightLimit = 200;
  const checkWeight = (floor) => {
    totalWeight = 0;
    peopleCoordinates.map((person) => {
      if (person.space_no === 6) {
        totalWeight = totalWeight + person.weight;
      }
    });
    if (totalWeight < weightLimit) {
      moveElevator(floor);
    } else {
      alert(
        "weight exceeded!\nMax weight: " +
          weightLimit +
          "\nTotal weight: " +
          totalWeight
      );
    }
  };

  function moveElevator(floor) {
    if (!door) {
      setTimeout(() => {
        setCurrentFloor(floor);
        setCurrentFloor(floor);
        // Assuming each floor has a height of 100px
        const targetPosition = (no_of_floors - floor - 1) * 142;
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
      }, 1000);
    }
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
          onClick={
            toggleGhost === true
              ? Ghost
              : () => {
                  checkWeight(0);
                }
          }
        >
          G
        </button>
        <button
          class="btn-floor"
          floor="1"
          onClick={
            toggleGhost === true
              ? Ghost
              : () => {
                  checkWeight(1);
                }
          }
        >
          1
        </button>
        <button
          class="btn-floor"
          floor="2"
          onClick={
            toggleGhost === true
              ? Ghost
              : () => {
                  checkWeight(2);
                }
          }
        >
          2
        </button>
        <button
          class="btn-floor"
          floor="3"
          onClick={
            toggleGhost === true
              ? Ghost
              : () => {
                  checkWeight(3);
                }
          }
        >
          3
        </button>
        <button
          class="btn-floor"
          floor="4"
          onClick={
            toggleGhost === true
              ? Ghost
              : () => {
                  checkWeight(4);
                }
          }
        >
          4
        </button>
        <button class="btn-floor" onClick={opendoor}>
          open
        </button>
        <button
          class="btn-floor"
          onClick={toggleCardAccess === true ? autoMove : closedoor}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default LiftButtons;
