import React from "react";
import Servicios from "./pages/Servicios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
<Router>
      <Routes>
        <Route path="/Servicios" element={<Servicios />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;

