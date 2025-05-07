import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../styles/Login.css";
import Logo from "../assets/LogoHuella.png"; // Asegúrate que esté en src/assets
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate

const LoginForm = () => {
  const navigate = useNavigate(); // Inicializa el hook para navegación

  const onFinish = (values) => {
    console.log("Valores del formulario:", values);
    message.success("Inicio de sesión exitoso");
    navigate("/inicio"); // Redirige al usuario a la página /inicio después de iniciar sesión
  };

  return (
    <div className="form-wrapper">
      <div className="logo-container">
        <img src={Logo} alt="Logo Huella" className="login-logo" />
      </div>

      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Por favor ingresa tu usuario" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Usuario" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Por favor ingresa tu contraseña" },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" block className="custom-login-button">
            Iniciar Sesión
          </Button>
        </Form.Item>

        {/* Apartado de crear cuenta */}
        <Form.Item>
          <div className="create-account">
            ¿No tienes cuenta?{" "}
            <Link to="/registrar-usuario" className="create-account-link">
              Crear cuenta
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
