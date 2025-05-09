import { Card, Typography } from "antd";
import "../styles/Servicio.css";

const { Title, Paragraph } = Typography;

const Servicio = ({
    imagen,
    titulo,
    descripcion,
    etiqueta = "Servicio",
    alturaImagen = 300
}) => {
    return (
        <Card className="servicio-card">
            <div className="imagen-container" style={{ height: `${alturaImagen}px` }}>
                <img
                    src={imagen}
                    alt={titulo}
                    className="imagen-servicio"
                />
            </div>

            <div className="contenido-texto">
                <span className="etiqueta-servicio">{etiqueta}</span>
                <Title level={3} className="titulo-servicio">
                    {titulo}
                </Title>
                <Paragraph className="descripcion-servicio">
                    {descripcion}
                </Paragraph>
            </div>
        </Card>
    );
};

export default Servicio;
