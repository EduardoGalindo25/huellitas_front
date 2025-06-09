import React, { useState, useEffect, useCallback } from "react";
import { Typography, Layout, Table, Button, Input } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import MainLayout from "../components/MainLayoutAdmin.jsx";
import api from "../utils/axiosConfig";
import "../styles/Clientes.css";

const { Title } = Typography;
const { Content } = Layout;

const Clientes = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchClientes = useCallback(async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get("/citas/obtener-clientes", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setData(response.data.data);
        setFilteredData(response.data.data);
      } else {
        console.error("Error al obtener clientes:", response.data.message);
      }
    } catch (error) {
      console.error("Error en la petición axios:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  useEffect(() => {
    if (!searchText) {
      setFilteredData(data);
    } else {
      const lowerSearch = searchText.toLowerCase();
      const filtered = data.filter(
        (cliente) =>
          cliente.nombre.toLowerCase().includes(lowerSearch) ||
          cliente.correo.toLowerCase().includes(lowerSearch) ||
          cliente.numero.toLowerCase().includes(lowerSearch) ||
          String(cliente.id).includes(lowerSearch)
      );
      setFilteredData(filtered);
    }
  }, [searchText, data]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 70,
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
      align: "center",
    },
    {
      title: "Número",
      dataIndex: "numero",
      key: "numero",
      align: "center",
      width: 130,
    },
    {
      title: "Correo",
      dataIndex: "correo",
      key: "correo",
      align: "center",
    },
  ];

  return (
    <MainLayout>
      <div
        className="title_container"
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 20px",
          marginBottom: 16,
        }}
      >
        <Title level={1} className="title" style={{ margin: 0 }}>
          Lista de Clientes
        </Title>
      </div>

      {/* Contenedor con botón a la izquierda y búsqueda a la derecha en la misma línea */}
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 20px",
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          icon={<ReloadOutlined spin={loading} />}
          onClick={fetchClientes}
          loading={loading}
          shape="circle"
          size="large"
          aria-label="Recargar tabla"
          title="Recargar tabla"
        />

        <Input
          placeholder="Buscar clientes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 250 }}
          allowClear
        />
      </div>

      <Content
        className="tabla-contenedor"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}
      >
        <Table
          columns={columns}
          dataSource={filteredData}
          loading={loading}
          rowKey="id"
          pagination={{ pageSize: 8 }}
          size="small"
          bordered
          scroll={{ x: "max-content" }} // <--- Esto activa scroll horizontal automático
        />
      </Content>
    </MainLayout>
  );
};

export default Clientes;
