import React, { useEffect, useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const [log, setLog] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://team1-ghostelevator.azurewebsites.net/api/logfinder", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setLog(res);
        console.log(res);
      });
  }, []);

  return (
    <div class="box-wrap">
      <div class="table">
        <button class="btn-floor" onClick={() => navigate("/elevator")}>
          elevator
        </button>
        <table>
          <tr>
            <th>id</th>
            <th>Datetime</th>
            <th>FloorNum</th>
            <th>weight</th>
          </tr>
          {log.map((x) => {
            return (
              <tbody>
                <tr key={x.id}>
                  <td>{x.id}</td>

                  <td>{x.elevatorLogAccess.dateTime}</td>

                  <td>{x.floorno}</td>

                  <td>{x.elevatorLogAccess.weight}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Log;
