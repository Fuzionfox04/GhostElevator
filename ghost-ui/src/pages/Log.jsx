import React, { useEffect, useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const [log, setLog] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://team1-ghostelevator.azurewebsites.net/api/lift", {
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
        <button class="btn-floor" onClick={() => navigate("/ElevatorLog")}>
          LiftLog
        </button>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Emp Id</th>
            <th>Start Floor</th>
            <th>End Floor</th>
            <th>Date Time</th>
          </tr>
          {log.map((x) => {
            console.log(x);
            return (
              <tbody>
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.employee?.name}</td>
                  <td>{x.empId}</td>
                  <td>{x.start}</td>
                  <td>{x.end}</td>
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

export default Log;
