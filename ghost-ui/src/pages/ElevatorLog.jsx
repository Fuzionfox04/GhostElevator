import React, { useEffect, useState } from "react";
import "./ElevatorLog.css";
import { useNavigate } from "react-router-dom";

const ElevatorLog = () => {
  const [log, setElevatorLog] = useState([]);
  const navigate = useNavigate();

  return (
    <div class="box-wrap">
      <div class="table">
        <button class="btn-floor" onClick={() => navigate("/elevator")}>
          elevator
        </button>
        <table>
          <tr>
            <th>id</th>
            <th>floorno</th>
            <th>weight</th>
            <th>dateTime</th>
          </tr>
          {log.map((x) => {
            console.log(x);
            return (
              <tbody>
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.floorno}</td>
                  <td>{x.weight}</td>
                  <td>{x.dateTime}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ElevatorLog;
