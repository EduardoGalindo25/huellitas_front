import React from "react";
import { Button, Typography, Row, Col } from "antd";
import "../styles/Banner.css";
import bgImagen from "../assets/Banner.png";

const { Title } = Typography;

const Banner = () => {
    return (
        <div className="banner-container">
            <Row justify="center" align="middle" className="banner-row">
                <Col xs={24} md={18} lg={14}>
                    <div className="banner-content">
                        <Title className="banner-title">
                            Somos una nueva experiencia veterinaria para tu mascota
                        </Title>
                        <Button
                            type="primary"
                            className="banner-button"
                            size="large"
                        >
                            Agénda tu cita
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;