import { Routes, Route } from "react-router-dom";
import ElevatorPage from "./pages/ElevatorPage";
import Log from "./pages/Log";
import Home from "./pages/Home";
import EditEmployee from "./pages/EditEmployee";
import ElevatorLog from "./pages/ElevatorLog";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/elevator" element={<ElevatorPage />} />
        <Route path="/log" element={<Log />} />
        <Route path="/employee/edit/:empid" element={<EditEmployee />} />
        <Route path="/Elevatorlog" element={<ElevatorLog />} />
      </Routes>
    </div>
  );
}

export default App;
