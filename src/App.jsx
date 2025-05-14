import React from "react";
import "antd/dist/reset.css";
import Servicios from "./pages/Servicios";
import Banner from "./components/Banner";
import Citas from "./pages/Appointments";
import ServiciosCitas from "./pages/ServicesAppointments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/Banner" element={<Banner />} />
      <Route path="/" element={<Servicios />} />
      <Route path="/Citas" element={<Citas />} />
      <Route path="/Servicios-citas" element={<ServiciosCitas />} />
      {}
    </Routes>
  </Router>
);

export default App;
