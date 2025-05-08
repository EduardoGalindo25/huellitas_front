import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Typography, Button } from "antd";
import Navbar from "../components/NavBarServicesAppointments";
import ServiceButtons from "../components/ServicesButtonAppointments";
const { Content } = Layout;
const { Title } = Typography;

const ServicesAppointments = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleSubmit = () => {
    if (selectedService) {
      navigate("/registrar-citas"); // Redirige a la ruta '/registrar-cita'
    } else {
      alert("Por favor, selecciona un servicio");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title level={3}>Escoge un servicio</Title>
        <ServiceButtons
          selectedService={selectedService}
          onServiceClick={handleServiceClick}
        />
      </Content>
    </Layout>
  );
};

export default ServicesAppointments;
