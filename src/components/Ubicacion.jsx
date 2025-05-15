import React from "react";
import { Card, Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;

const Ubicacion = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "60px 0",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <Row gutter={24} align="middle" justify="center">
        <Col xs={24} md={12}>
          <Card
            hoverable
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.8184616144517!2d-103.7318617896081!3d19.246741981918117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84254552c9f5fd35%3A0x59fb930bda02c644!2sHuellitas%20Negras!5e0!3m2!1ses-419!2smx!4v1747280005829!5m2!1ses-419!2smx"
              width="1500px"
              height="300"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
            ></iframe>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <Title level={3}>¿Dónde estamos?</Title>
            <Paragraph>
              📍 Corregidora 101, Centro, 28000 Colima, Col, México.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Ubicacion;
