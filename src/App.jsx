import React from "react";
import Home from "./pages/Home";
import "antd/dist/reset.css";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import Banner from "./components/Banner";
import Citas from "./pages/Appointments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/banner" element={<Banner />} />
      <Route path="/" element={<Home />} />
      <Route path="/agendar-citas" element={<Citas />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/productos" element={<Productos />} />
      {}
    </Routes>
  </Router>
);

export default App;
