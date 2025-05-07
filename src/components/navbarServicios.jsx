import React, { useEffect, useState } from "react";
import "../styles/navbarServicios.css";
import LogoHuella from "../assets/LogoHuella.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navBar ${isScrolled ? "transparent" : ""}`}>
            <div className="navContenido">
                <img src={LogoHuella} className="logo" alt="logoHuellitas" />

                {/* Icono hamburguesa (solo se muestra en móvil) */}
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </div>


                {/* Menú principal (visible u oculto en base a menuOpen en móviles) */}
                <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Productos</a>
                    <a href="#">Inicia Sesión</a>
                    <a href="#">Agendar Cita</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
