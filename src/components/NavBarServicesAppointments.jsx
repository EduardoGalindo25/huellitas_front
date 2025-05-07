import React from "react";
import { Link } from "react-router-dom";
import { Layout, Space } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import "../styles/NavBarServicesAppointments.css";

const { Header } = Layout;

const NavBarServicesAppointments = () => {
  return (
    <Header className="navbar-header">
      <Space size="large">
        <Link to="/inicio" className="navbar-link">
          <HomeOutlined className="navbar-icon" />
          Inicio
        </Link>
        <Link to="/servicio" className="navbar-link">
          Servicios
        </Link>
        <Link to="/productos" className="navbar-link">
          Productos
        </Link>
      </Space>

      <Link to="/login" className="navbar-login">
        <UserOutlined className="navbar-icon" />
        Iniciar sesión
      </Link>
    </Header>
  );
};

export default NavBarServicesAppointments;
