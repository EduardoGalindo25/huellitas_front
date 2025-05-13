import React from "react";
import NavBar from "../components/navbarServicios.jsx";
import Banner from "../components/Banner.jsx";
import Servicio from "../components/Servicio.jsx";

// Renombra esta importación para que no choque con el componente Banner
import banner from "../assets/Banner.png";
import consulta from "../assets/consulta.jpg";
import estetica from "../assets/estetica.jpg";
import cirugia from "../assets/cirugia.jpg";
import pension from "../assets/pension.jpg"
import adopcion from "../assets/adopcion.jpg";
import hospital from "../assets/hospital.jpg";

console.log("Banner cargado:", banner);
const Servicios = () => {
    return (
        <div className="main-container">
            <NavBar />
            <Banner 
                imagen={banner}
                titulo="Somos una nueva experiencia veterinaria para tu mascota" 
            /> 
            <div className="servicios-grid">
                <Servicio
                    imagen={consulta}
                    titulo="Consulta General Veterinaria"
                    descripcion="Examen completo para evaluar la salud de tu mascota, incluyendo revisión de peso, temperatura y diagnóstico profesional."
                    alturaImagen={250}
                />
                <Servicio
                    imagen={estetica}
                    titulo="Estética y baño"
                    descripcion="Servicio especializado en la limpieza y cuidado de tu mascota."
                    alturaImagen={250}
                />
                <Servicio
                    imagen={cirugia}
                    titulo="Cirugía y tratamientos"
                    descripcion="Proceso llevado por especialistas en cirugía veterinaria."
                    alturaImagen={250}
                />
            </div>
            <div className="servicios-gridd">
                <Servicio
                    imagen={pension}
                    titulo="Pensión"
                    descripcion="Cuidado y resguardo para tus mascotas mientras no estés en casa."
                    alturaImagen={250}
                />
                <Servicio
                    imagen={hospital}
                    titulo="Servicio de hopitalización"
                    descripcion="Atención médica especializada para mascotas que requieren cuidados intensivos."
                    alturaImagen={250}
                />
                <Servicio
                    imagen={adopcion}
                    titulo="Adopcion de mascotas"
                    descripcion="Proceso de adopción responsable y amoroso para encontrar un hogar adecuado para mascotas necesitadas."
                    alturaImagen={250}
                />
            </div>
        </div>
    );
};

export default Servicios;
