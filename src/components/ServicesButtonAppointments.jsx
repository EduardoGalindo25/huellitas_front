import React from "react";
import { Button, Space } from "antd";

const ServicesButtonAppointments = ({
  selectedService,
  onServiceClick,
  handleSubmit,
}) => {
  const services = [
    { id: "servicio1", name: "Baño" },
    { id: "servicio2", name: "Corte de pelo" },
    { id: "servicio3", name: "Corte y baño" },
    { id: "servicio4", name: "Cita médica" },
  ];

  return (
    <Space direction="vertical" size="middle" style={{ width: "50%" }}>
      {services.map((service) => (
        <Button
          key={service.id}
          type={selectedService === service.id ? "primary" : "default"}
          onClick={() => onServiceClick(service.id)}
          block
        >
          {service.name}
        </Button>
      ))}
      {/* Botón de Enviar */}
      <Button
        type="primary"
        onClick={handleSubmit}
        style={{ marginTop: 20, width: "100%" }}
      >
        Enviar
      </Button>
    </Space>
  );
};

export default ServicesButtonAppointments;
