import MainLayout from "../components/MainLayout";
import { Typography } from "antd";
import fondo from "../assets/PerroFondo1.jpg";
import Ubicacion from "../components/Ubicacion";
import Footer from "../components/Footer";
import "../styles/Home.css";
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <MainLayout>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${fondo})`,
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <div
          className="main-content"
          style={{
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <Title
            level={1}
            style={{
              fontSize: "clamp(32px, 6vw, 60px)", // Se adapta a tamaño de pantalla
              color: "#fff",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Bienvenidos a Huellitas
          </Title>
          <Paragraph
            style={{
              fontSize: "clamp(16px, 3vw, 22px)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Donde la salud y el cuidado de tu mascota es nuestra prioridad.
          </Paragraph>
        </div>
      </section>
      <Ubicacion />
      <Footer />
    </MainLayout>
  );
}

export default Home;
