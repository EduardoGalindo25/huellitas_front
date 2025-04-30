import "../styles/Formulario.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function Formulario() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-home">
          <Link to="/#" className="home-icon" title="Ir al inicio">
            <FaHome size={24} color="#fff" />
          </Link>
          <h4>inicio</h4>
        </div>
      </div>
      <div className="form">
        <form className="form">
          <fieldset>
            <legend>
              <strong>Nueva cita</strong>
              <br />
              <strong>Informacion de contacto</strong>
            </legend>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" placeholder="Nombre" required />
            <br />

            <label htmlFor="lastname">Apellidos: </label>
            <input type="text" id="lastname" placeholder="Apellidos" required />
            <br />

            <label htmlFor="contact">Telefono: </label>
            <input type="text" id="contact" placeholder="Telefono" required />
            <br />
            <button type="submit">enviar</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
