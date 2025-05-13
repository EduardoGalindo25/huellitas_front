import React from "react";
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

export default App;

