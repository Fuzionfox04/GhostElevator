import { Routes, Route } from "react-router-dom";
import ElevatorPage from "./pages/ElevatorPage";
import Log from "./pages/Log";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/elevator" element={<ElevatorPage />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
