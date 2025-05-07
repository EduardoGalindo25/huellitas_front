import React from "react";
import { Card } from "antd";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Card title="Iniciar Sesión" className="login-card">
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
