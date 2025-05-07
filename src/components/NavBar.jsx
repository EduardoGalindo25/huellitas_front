/*import React from "react";
import "../styles/NavBar.css";
import LogoHuella from "../assets/LogoHuella.png";

const NavBar = () => {
    return (
        <div className="navBar">
            <img src={LogoHuella} className="logo" alt="logoHuellitas" />
            <div className="menu">
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                </nav>
            </div>
            <div className="botones">
                <a href="#" className="btn botonSesion">INICIA SESION</a>
                <a href="#" className="btn botonCita">AGENDA CITA</a>
            </div>
        </div>
    );
};
export default NavBar;*/
import React from "react";
import "../styles/NavBar.css";
import LogoHuella from "../assets/LogoHuella.png";
import { useEffect, useState } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50); // cuando baja más de 50px
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`navBar ${isScrolled ? "transparent" : ""}`}>
            <div className="navContenido">
                <img src={LogoHuella} className="logo" alt="logoHuellitas" />
                <div className="menu">
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Productos</a>
                    <a href="#">Inicia Sesión</a>
                    <a href="#">Agendar Cita</a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
