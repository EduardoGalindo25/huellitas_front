import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./pages/Formulario";
import Servicio from "./pages/Servicio";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registrar-cita" element={<Formulario />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/Servicios" element={<Servicios />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;

