import React from "react";
import { Button } from "antd";
import "../styles/Banner.css"; // Asegúrate de tener este archivo CSS para los estilos
import bgImagen from "../assets/Banner1.jpg"; // Asegúrate de tener esta imagen en la ruta correcta
import { BiBorderRadius } from "react-icons/bi";

const styleButton = {
    backgroundColor: '#59867b', 
    borderColor: '#000', 
    height: '70px', 
    width: '250px',
    fontSize: '20px',
    borderRadius: '500px',
}

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>Somos una nueva experiencia veterinaria para tu mascota</h1>
                <Button type="primary" style={styleButton}>Agénda tu cita</Button>
            </div>
        </div>
    );
}

export default Banner;