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
      `https://team1-ghostelevator.azurewebsites.net/api/Employee/${empid}`,
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
  const [floor_no, setFloor_no] = useState(emp.floor_no);

  const [space_no, setSpace_no] = useState(emp.space_no);

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
        value={name}
      />
      <TextField
        label="Floor no"
        variant="filled"
        onChange={(event) => setFloor_no(event.target.value)}
        value={floor_no}
      />
      <TextField
        label="Space no"
        variant="filled"
        onChange={(event) => setSpace_no(event.target.value)}
        value={space_no}
      />
      <TextField
        label="Weight"
        variant="filled"
        onChange={(event) => setWeight(event.target.value)}
        value={weight}
      />
      <TextField
        label="Height"
        variant="filled"
        onChange={(event) => setHight(event.target.value)}
        value={height}
      />
      <TextField
        label="Office floor"
        variant="filled"
        onChange={(event) => setOfficeFloor(event.target.value)}
        value={officefloor}
      />
      <button
        variant="contained"
        onClick={() => {
          const updatedEmp = {
            name: name,

            floor_no: floor_no,

            space_no: space_no,

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
