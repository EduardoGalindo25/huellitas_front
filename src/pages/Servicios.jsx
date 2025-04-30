import React from "react";
import NavBar from "../Components/NavBar.jsx";
import Banner from "../Components/Banner.jsx";
import "./Servicios.css";
import { FaStethoscope, FaAward, FaPhone, FaUserMd, FaQuestionCircle } from "react-icons/fa";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import Vet1 from "../assets/Vet1.jpg";

/*function Servicios() {
    return (
        <div className="Servicios">
            <div className="navBar"><NavBar/></div>
            <div className="banner"><Banner/></div>
        </div>
    );
}*/






const Servicios = () => {
    const categorias = [
        {
            titulo: "Croquetas",
            imagenes: [img1, img2, img3],
        },
        {
            titulo: "Juguetes",
            imagenes: [img4, img5, img6],
        },
        {
            titulo: "Accesorios",
            imagenes: [img7, img8, img9],
        },
    ];

    const servicios = [
        {
            title: "Full diagnostics",
            icon: <FaStethoscope />,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            title: "Awarded service",
            icon: <FaAward />,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            title: "00 - 24 Call",
            icon: <FaPhone />,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            title: "The best experts",
            icon: <FaUserMd />,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            title: "How did we get here?",
            icon: <FaQuestionCircle />,
            description: "Lorem ipsum dolor sit amet, est vide volus purtis ex, nec in linc solum indo cum.",
        },
    ];

    return (
        <>
            <NavBar />
            <div className="seccionIconos">
            <div className="TituloIconos">
                <h3>S E R V I C I O S</h3>
            </div>
                <div className="serviciosContainer">
                    
                    {servicios.map((servicio, index) => (
                        <div key={index} className="servicioCard">
                            <div className="iconoGrande">{servicio.icon}</div>
                            <h3>{servicio.title}</h3>
                            <p>{servicio.description}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className="contenedorMedicina">
                <div className="contenedorBlanco">
                    <div className="imagenMedicina">
                        <img src={Vet1} alt="Referencia" />
                    </div>
                    <div className="textoMedicina">
                        <h3>Contamos con personal capacitado</h3>
                        <h2>'Brindarle salud y bienestar de tu peludo es nuestra prioridad'</h2>
                        <h1>Contamos con:</h1>
                        <ul>                            
                            <li>Consultas</li>
                            <li>Farmacia</li>
                            <li>Peluquería</li>
                            <li>Cirugía</li>
                        </ul>
                    </div>
                </div>
                {categorias.map((categoria, i) => (
                    <div key={i} className="grupoCategoria">
                        <h2>{categoria.titulo}</h2>
                        <div className="filaImagenes">
                            {categoria.imagenes.map((img, idx) => (
                                <div key={idx} className="imagenCuadro">
                                    <img src={img} alt={`${categoria.titulo}-${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Servicios;