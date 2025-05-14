import React from "react";
<<<<<<< HEAD
import Home from "./pages/Home";
import "antd/dist/reset.css";
import Servicios from "./pages/Servicios";
import Banner from "./components/Banner";
import Citas from "./pages/Appointments";
import ServiciosCitas from "./pages/ServicesAppointments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/banner" element={<Banner />} />
      <Route path="/" element={<Home />} />
      <Route path="/citas" element={<Citas />} />
      <Route path="/servicios" element={<Servicios />} />
      {}
    </Routes>
  </Router>
);
=======
import 'antd/dist/reset.css';
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
    <Router>
      <Routes>
        <Route path="/Servicios" element={<Servicios />} /> 
        <Route path="/Productos" element={<Productos />} />
      </Routes>
    </Router>
  );
>>>>>>> dev-Heli

export default App;
