import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, Button } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiSignOut } from "react-icons/pi";
import LogoHuella from "../assets/LogoHuella.png";
import "../styles/navbarDashboard.css";
import Swal from "sweetalert2";
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem("token");

      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Sesión cerrada correctamente",
        html: "Espera un momento, redirigiendo a la página de inicio",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate("/");
        }
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Error al cerrar sesión",
        text: error.message || "Ocurrió un error inesperado.",
      });
    }
  };
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
    { key: "/#/dashboard", label: "Inicio" },
    { key: "/#/control-de-citas", label: "Citas" },
    { key: "/#/clientes", label: "Clientes" },
    { key: "/#/pacientes", label: "Pacientes" },
    { key: "/", label: "Log Out" },
  ];

  return (
    <nav className={`navBar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navContenido">
        <Link to="/">
          <img src={LogoHuella} className="logo" alt="logoHuellitas" />
        </Link>

        {/* Menú Desktop */}
        <div className="menu-desktop">
          {menuItems.slice(0, 4).map((item) => (
            <a key={item.key} href={`${item.key}`} className="nav-link">
              {item.label}
            </a>
          ))}
          <button onClick={handleLogout} className="nav-link logout-button">
            <PiSignOut size={22} />
          </button>
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
            {menuItems.map((item) =>
              item.label === "Log Out" ? (
                <button
                  key={item.key}
                  onClick={() => {
                    toggleMenu();
                    handleLogout();
                  }}
                  className="mobile-link logout-button"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.key}
                  href={`${item.key}`}
                  className="mobile-link"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
