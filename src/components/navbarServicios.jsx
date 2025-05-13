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
    const navigate = useNavigate();

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

    const handleAgendarClick = () => {
        navigate("/agendar");
        if (menuOpen) toggleMenu();
    };

    const menuItems = [
        { key: "inicio", label: "Inicio", path: "/" },
        { key: "servicios", label: "Servicios", path: "/servicios" },
        { key: "productos", label: "Productos", path: "/productos" },
    ];

    return (
        <nav className={`navBar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navContenido">
                <Link to="/">
                    <img src={LogoHuella} className="logo" alt="logoHuellitas" />
                </Link>

                {/* Menú Desktop */}
                <div className="menu-desktop">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.key} 
                            to={item.path}
                            className="nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        type="primary"
                        className="nav-button"
                        onClick={handleAgendarClick}
                    >
                        Agéndar tu cita
                    </Button>
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
                            <Link
                                key={item.key}
                                to={item.path}
                                className="mobile-link"
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button
                            type="primary"
                            className="mobile-button"
                            size="large"
                            block
                            onClick={handleAgendarClick}
                        >
                            Agéndar tu cita
                        </Button>
                    </div>
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;