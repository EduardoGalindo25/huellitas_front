import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import '../styles/main.css';

const { Title, Paragraph } = Typography;

const Ubicacion = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '60px 0' }}>
      <Row gutter={24} align="middle" justify="center">
        <Col xs={24} md={12}>
          <a
            href="https://maps.app.goo.gl/a9Enyt8kjTNqVvBc9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Card
              hoverable
              cover={
                <img
                  src="/src/assets/mapaUbicacion.png"
                  alt="Ubicación Huellitas"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s',
                  }}
                />
              }
            />
          </a>
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
