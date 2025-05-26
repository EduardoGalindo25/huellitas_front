import { Card, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom"; // Agrega useLocation
import "../styles/Cards.css";

const { Title, Paragraph } = Typography;

const Cards = ({
  imagen,
  titulo,
  descripcion,
  alturaImagen = 300,
  idServicio,
}) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ruta actual

  const handleCardClick = () => {
    if (location.pathname === "/servicios") {
      navigate(`/agendar-citas?servicio=${idServicio}`);
    }
  };

  return (
    <Card className="container-card" onClick={handleCardClick}>
      <div className="imagen-container" style={{ height: `${alturaImagen}px` }}>
        <img src={imagen} alt={titulo} className="imagen" />
      </div>

      <div className="contenido-texto">
        <Title level={3} className="titulo">
          {titulo}
        </Title>
        <Paragraph className="descripcion">{descripcion}</Paragraph>
      </div>
    </Card>
  );
};

export default Cards;
