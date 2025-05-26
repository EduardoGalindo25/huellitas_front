import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, Button } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiSignOut } from "react-icons/pi";
import LogoHuella from "../assets/LogoHuella.png";
import "../styles/navbarDashboard.css";

import logOut from "../assets/salida.png"

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
        { key: "/#/inicio-dashboard", label: "Inicio" },
        { key: "/#/citas", label: "Citas" },
        { key: "/#/clientes", label: "Clientes" },
        { key: "/#/pacientes", label: "Pacientes" },
        { key: "/#/inicio", label: "Log Out" },
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
                    <a href="/#/servicios" className="nav-link">
                        <PiSignOut size={22} />
                    </a>
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
