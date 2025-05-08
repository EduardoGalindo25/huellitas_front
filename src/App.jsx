import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Ubicacion from './components/Ubicacion';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Ubicacion /> 
      <Footer /> 
    </Router>
  );
}

export default App;
