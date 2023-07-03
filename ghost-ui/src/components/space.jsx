import React, { useState } from "react";

function space() {
  const useOutsideClick = (callback) => {
    const ref = React.useRef();

    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);

    return ref;
  };

  const [spaceSelect, setSpaceSelect] = useState("");
  return <div onClick={setSpaceSelect("red")}>space</div>;
}

export default space;
