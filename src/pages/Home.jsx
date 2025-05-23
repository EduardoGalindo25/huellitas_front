import React from "react";
import { Button, Typography } from "antd";
import fondo from "../assets/PerroFondo1.jpg"; // Ruta de la imagen
import Navbar from "../components/navbarServicios"; // Asegúrate de que la ruta es correcta
import Footer from "../components/Footer"; // Asegúrate de que la ruta es correcta
import Ubicacion from "../components/Ubicacion"; // Asegúrate de que la ruta es correcta

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sección Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Aseguramos que la imagen ocupe toda la pantalla
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden", // Evitamos barras de desplazamiento
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Capa oscura sobre la imagen
            zIndex: 1,
          }}
        ></div>

        <div
          className="main-content"
          style={{
            zIndex: 2,
            textAlign: "center",
            color: "#fff", // Color blanco para el texto
            padding: "20px",
          }}
        >
          <Title
            level={1}
            style={{
              fontSize: "60px", // Aumentamos el tamaño del título
              fontWeight: "bold", // Hacemos el título en negritas
              color: "#fff", // Texto blanco
              marginBottom: "20px", // Espaciado debajo del título
            }}
          >
            Bienvenidos a Huellitas
          </Title>

          <Paragraph
            style={{
              fontSize: "22px", // Aumentamos el tamaño del párrafo
              lineHeight: "1.5", // Espaciado de líneas para mejorar la lectura
              color: "#fff", // Texto blanco
              marginBottom: "20px", // Espaciado debajo del párrafo
            }}
          >
            Donde la salud y el cuidado de tu mascota es nuestra prioridad.
          </Paragraph>
        </div>
      </section>

      {/* Sección de Ubicación */}
      <Ubicacion />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
