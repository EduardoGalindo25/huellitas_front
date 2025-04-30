import React from "react";

function Banner () {
    return (
        <div className="banner-Contenedor">
            <img src="../assets/Banner1.jpg" alt="Fondo-Banner-1" />
            <div className="texto">
                <p className="titulo">{props.titulo}</p>
                <p className="texto">{props.texto}</p>
            </div>
            <div className="botones">
                <button>Agenda una cita</button>
            </div>
        </div>
    );
}

export default Banner;