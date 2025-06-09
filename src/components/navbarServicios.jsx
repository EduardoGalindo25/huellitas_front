import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, Button } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoHuella from "../assets/LogoHuella.png";
import "../styles/navbarServicios.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { key: "/#/", label: "Inicio" },
    { key: "/#/servicios", label: "Servicios" },
    { key: "/#/productos", label: "Productos" },
    { key: "/#/agendar-citas", label: "Agenta tu cita" },
    { key: "/#/login", label: "Inicia sesión" },
  ];

  return (
    <nav className={`navBar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navContenido">
        <Link to="/">
          <img src={LogoHuella} className="logo" alt="logoHuellitas" />
        </Link>

        <div className="menu-desktop">
          {menuItems.slice(0, 3).map((item) => (
            <a key={item.key} href={`${item.key}`} className="nav-link">
              {item.label}
            </a>
          ))}

          {/* Botones con Link envolviendo al Button */}
          <Link to="/agendar-citas">
            <Button type="primary" className="nav-button">
              Agenda cita
            </Button>
          </Link>
          <Link to="/login">
            <Button type="primary" className="nav-button">
              Inicia sesión
            </Button>
          </Link>
        </div>

        {/* Botón Hamburguesa (Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </div>

        {/* Drawer para Mobile */}
        <Drawer
          placement="right"
          onClose={toggleMenu}
          open={menuOpen}
          closable={false}
          width={windowWidth > 576 ? "300px" : "100%"}
          bodyStyle={{ padding: 0, backgroundColor: "#59867b" }}
          headerStyle={{ display: "none" }}
        >
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`${item.key}`}
                className="mobile-link"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
