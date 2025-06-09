import React from "react";
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

const LoginForm = () => {
  const onFinish = async (values) => {
    try {
      const params = new URLSearchParams();
      params.append("usuario", values.username);
      params.append("password", values.password);

      const response = await axios.post("/login", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      message.success("¡Login exitoso!");
      console.log("Respuesta:", response.data);
      // Aquí puedes redirigir o guardar token, etc.
    } catch (error) {
      message.error("Usuario o contraseña incorrectos");
      console.error("Error en login:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        title="Iniciar sesión"
        bordered={false}
        style={{
          width: 600,
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          height: "auto",
          maxHeight: "90vh",
        }}
        headStyle={{
          backgroundColor: "#59867b",
          color: "#fff",
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "bold",
          padding: "20px 0",
        }}
      >
        {/* Mostrar alerta solo si está visible */}
        {alert.visible && (
          <Alert
            style={{ marginBottom: 24 }}
            message={alert.message}
            type={alert.type}
            showIcon
            closable
            onClose={() => setAlert({ ...alert, visible: false })}
          />
        )}

        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 460, margin: "0 auto" }}
        >
          <Form.Item
            label="Usuario"
            name="email"
            rules={[{ required: true, message: "Ingresa tu email" }]}
            style={{ marginBottom: 32 }}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Usuario"
              size="large"
              style={{ fontSize: "1.1rem", padding: "10px" }}
            />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Ingresa tu contraseña" }]}
            style={{ marginBottom: 40 }}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Contraseña"
              size="large"
              style={{ fontSize: "1.1rem", padding: "10px" }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#59867b",
                borderColor: "#59867b",
                fontSize: "1.2rem",
                padding: "12px 0",
              }}
              block
              size="large"
            >
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
