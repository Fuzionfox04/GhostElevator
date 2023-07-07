import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
function EditEmployee() {
  const { empid } = useParams();
  console.log({ empid });
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    fetch(
      `https://team1-ghostelevator.azurewebsites.net/api/employee/${empid}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => setEmp(res));
  }, []);
  console.log(emp);
  return emp ? <EditEmployeeForm emp={emp} /> : "Loading...";
}

function EditEmployeeForm({ emp }) {
  const [name, setName] = useState(emp.name);
  const [weight, setWeight] = useState(emp.weight);
  const [height, setHight] = useState(emp.weight);
  const [officefloor, setOfficeFloor] = useState(emp.officefloor);

  const navigate = useNavigate();
  return (
    <div className="employeeForm">
      <TextField
        label="Name"
        variant="filled"
        onChange={(event) => setName(event.target.value)}
        // value={name}
      />
      <TextField
        label="Weight"
        variant="filled"
        onChange={(event) => setWeight(event.target.value)}
        // value={weight}
      />
      <TextField
        label="Height"
        variant="filled"
        onChange={(event) => setHight(event.target.value)}
        // value={height}
      />
      <TextField
        label="Office floor"
        variant="filled"
        onChange={(event) => setOfficeFloor(event.target.value)}
        // value={officefloor}
      />
      <button
        variant="contained"
        onClick={() => {
          const updatedEmp = {
            name: name,

            weight: weight,

            height: height,

            officefloor: officefloor,
            id: emp.id,
          };

          fetch(
            `https://team1-ghostelevator.azurewebsites.net/api/Employee/${emp.id}`,
            {
              method: "PUT",
              body: JSON.stringify(updatedEmp),
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then(() => navigate("/elevator"));
        }}
      >
        SAVE
      </button>
      <button class="btn-floor" onClick={() => navigate("/elevator")}>
        back
      </button>
    </div>
  );
}

export default EditEmployee;
