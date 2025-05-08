import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Servicio from "./pages/ServicesAppointments";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registrar-citas" element={<Appointments />} />
        <Route path="/servicios-citas" element={<Servicio />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;
