import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Servicio from "./pages/ServicesAppointments";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registrar-cita" element={<Appointments />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar-usuario" element={<Register />} />
        <Route path="/Servicios" element={<Servicios />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;

