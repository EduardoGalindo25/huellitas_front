import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../assets/LogoHuella.png"; // Asegúrate que esté en src/assets
import { Link } from "react-router-dom"; // Si usas React Router

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Valores del formulario:", values);
    message.success("Registro de cuenta exitoso");
  };

  return (
    <div className="form-wrapper">
      <div className="logo-container">
        <img src={Logo} alt="Logo Huella" className="login-logo" />
      </div>

      <Form
        name="register_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstname"
          rules={[
            { required: true, message: "Por favor ingresa tu nombre(s)" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nombre(s)" />
        </Form.Item>

        <Form.Item
          name="lastname"
          rules={[
            { required: true, message: "Por favor ingresa tu apellido(s)" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Apellido(s)" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Por favor ingresa tu correo" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="correo" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Por favor ingresa tu contraseña" },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Por favor confirma tu contraseña" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Las contraseñas no coinciden")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirmar contraseña"
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" block className="custom-login-button">
            Registrar Cuenta
          </Button>
        </Form.Item>

        {/* Apartado de crear cuenta */}
        <Form.Item>
          <div className="create-account">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="create-account-link">
              Iniciar Sesión
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
