import React from "react";
import { Button, Typography, Row, Col } from "antd";
import "../styles/Banner.css";

const { Title } = Typography;

const Banner = ({ titulo, imagen }) => {
    return (
        <div
            className="banner-container"
            style={{
                backgroundImage: `url(${imagen})`,
            }}
        >
            <Row justify="center" align="middle" className="banner-row">
                <Col xs={24} md={18} lg={14}>
                    <div className="banner-content">
                        <Title className="banner-title">{titulo}</Title>
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
