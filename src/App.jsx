import React from "react";
import 'antd/dist/reset.css'; // Para v5+
import Servicios from "./pages/Servicios";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
    <Router>
      <Routes>
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Servicios" element={<Servicios />} /> 
      </Routes>
    </Router>
  );

export default App;

