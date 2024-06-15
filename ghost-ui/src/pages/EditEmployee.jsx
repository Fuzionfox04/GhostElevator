import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function EditEmployee() {
  const { empid } = useParams();
  console.log({ empid });
  const [emp, setEmp] = useState(null);
  return <EditEmployeeForm emp={emp} />;
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
      <Button
        variant="contained"
        onClick={() => {
          const updatedEmp = {
            name: name,

            weight: weight,

            height: height,

            officefloor: officefloor,
            id: emp.id,
          };
        }}
      >
        SAVE
      </Button>
      <button class="btn-floor" onClick={() => navigate("/elevator")}>
        back
      </button>
    </div>
  );
}

export default EditEmployee;
