import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { FaHome } from "react-icons/fa";
import "../styles/Servicio.css";

function Servicio() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); // Crea una instancia de useNavigate

  const handleServiceClick = (service) => {
    setSelectedService(service); // Establece el servicio seleccionado
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (selectedService) {
      navigate("/registrar-cita"); // Redirige a la ruta '/registrar-cita'
    } else {
      alert("Por favor, selecciona un servicio"); // Si no hay servicio seleccionado, muestra un alerta
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-home">
          <FaHome size={24} color="#fff" />
          <h4>Inicio</h4>
        </div>
      </div>
      <div className="form">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Escoge un servicio</strong>
            </legend>

            {/* Botones de servicio */}
            <div className="service-buttons">
              <button
                type="button"
                className={`service-button ${
                  selectedService === "servicio1" ? "selected" : ""
                }`}
                onClick={() => handleServiceClick("servicio1")}
              >
                Baño
              </button>

              <button
                type="button"
                className={`service-button ${
                  selectedService === "servicio2" ? "selected" : ""
                }`}
                onClick={() => handleServiceClick("servicio2")}
              >
                Corte de pelo
              </button>

              <button
                type="button"
                className={`service-button ${
                  selectedService === "servicio3" ? "selected" : ""
                }`}
                onClick={() => handleServiceClick("servicio3")}
              >
                Corte y baño
              </button>

              <button
                type="button"
                className={`service-button ${
                  selectedService === "servicio4" ? "selected" : ""
                }`}
                onClick={() => handleServiceClick("servicio4")}
              >
                Cita médica
              </button>
            </div>
            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Servicio;
