import React from "react";
import NavBar from "../components/navbarServicios.jsx";
import Banner from "../components/Banner.jsx";
import Servicio from "../components/Servicio.jsx";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";

const Servicios = () => {
    return (
        <div className="main-container">
            <NavBar />
            <Banner /> 
            <div className="servicios-grid">
                <Servicio
                    imagen={img1}
                    titulo="Consulta General Veterinaria"
                    descripcion="Examen completo para evaluar la salud de tu mascota, incluyendo revisión de peso, temperatura y diagnóstico profesional."
                    etiqueta="Veterinaria"
                    alturaImagen={250}
                />
                <Servicio
                    imagen={img2}
                    titulo="Cuidado Dental para Perros"
                    descripcion="Servicio especializado en limpieza y cuidado dental para prevenir enfermedades periodontales."
                />
                <Servicio
                    imagen={img2}
                    titulo="Cuidado Dental para Perros"
                    descripcion="Servicio especializado en limpieza y cuidado dental para prevenir enfermedades periodontales."
                />
                <Servicio
                    imagen={img2}
                    titulo="Cuidado Dental para Perros"
                    descripcion="Servicio especializado en limpieza y cuidado dental para prevenir enfermedades periodontales."
                />
                <Servicio
                    imagen={img2}
                    titulo="Cuidado Dental para Perros"
                    descripcion="Servicio especializado en limpieza y cuidado dental para prevenir enfermedades periodontales."
                />
            </div>
        </div>
    );
};

export default Servicios;
