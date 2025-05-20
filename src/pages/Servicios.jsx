import React from "react";
import NavBar from "../components/navbarServicios.jsx";
import Banner from "../components/Banner.jsx";
import Servicio from "../components/Servicio.jsx";
import banner from "../assets/Banner.png";
import consulta from "../assets/consulta.jpg";
import estetica from "../assets/estetica.jpg";
import cirugia from "../assets/cirugia.jpg";
import pension from "../assets/pension.jpg";
import adopcion from "../assets/adopcion.jpg";
import hospital from "../assets/hospital.jpg";

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
          descripcion="Examen completo para evaluar la salud de tu mascota."
          alturaImagen={250}
          idServicio={2} // ID para "Consulta"
        />
        <Servicio
          imagen={estetica}
          titulo="Estética y baño"
          descripcion="Servicio especializado en la limpieza y cuidado de tu mascota."
          alturaImagen={250}
          idServicio={1} // ID para "Estética"
        />
        <Servicio
          imagen={cirugia}
          titulo="Cirugía y tratamientos"
          descripcion="Proceso llevado por especialistas en cirugía veterinaria."
          alturaImagen={250}
          idServicio={3} // ID para "Cirugía"
        />
      </div>
      <div className="servicios-gridd">
        <Servicio
          imagen={pension}
          titulo="Pensión"
          descripcion="Cuidado y resguardo para tus mascotas."
          alturaImagen={250}
          idServicio={5} // ID para "Pensión"
        />
        <Servicio
          imagen={hospital}
          titulo="Servicio de hospitalización"
          descripcion="Atención médica especializada para mascotas que requieren cuidados intensivos."
          alturaImagen={250}
          idServicio={4} // ID para "Hospitalización"
        />
        <Servicio
          imagen={adopcion}
          titulo="Adopción de mascotas"
          descripcion="Proceso de adopción responsable y amoroso para encontrar un hogar adecuado para mascotas."
          alturaImagen={250}
          idServicio={6} // ID para "Adopción"
        />
      </div>
    </div>
  );
};

export default Servicios;
