import React, { useState, useEffect, useCallback } from "react";
import { Typography, Layout, Table, Button, Input, Modal, List } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import MainLayout from "../components/MainLayoutAdmin.jsx";
import api from "../utils/axiosConfig";
import { Tag } from "antd";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const { Title } = Typography;
const { Content } = Layout;

const Pacientes = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Estado para modal y citas
  const [modalVisible, setModalVisible] = useState(false);
  const [citasMascota, setCitasMascota] = useState([]);
  const [loadingCitas, setLoadingCitas] = useState(false);
  const [nombreMascotaSeleccionada, setNombreMascotaSeleccionada] =
    useState("");

  const exportarAExcel = () => {
    if (!citasMascota.length) return;

    const datos = citasMascota.map((item, index) => ({
      "#": index + 1,
      "ID Cita": item.id_cita,
      Servicio: item.servicio,
      Fecha: item.fecha_cita,
      Peso: `${item.peso} kg`,
      Estado: item.estado_cita,
    }));

    const worksheet = XLSX.utils.json_to_sheet(datos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reporte Citas");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array", // Usa 'array' en lugar de 'blob'
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, `reporte_citas_${nombreMascotaSeleccionada}.xlsx`);
  };

  const fetchPacientes = useCallback(async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get("/citas/obtener-mascotas", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setData(response.data.data);
        setFilteredData(response.data.data);
      } else {
        console.error("Error al obtener mascotas:", response.data.message);
      }
    } catch (error) {
      console.error("Error en la petición axios:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPacientes();
  }, [fetchPacientes]);

  useEffect(() => {
    if (!searchText) {
      setFilteredData(data);
    } else {
      const lowerSearch = searchText.toLowerCase();
      const filtered = data.filter(
        (paciente) =>
          paciente.nombre_mascota.toLowerCase().includes(lowerSearch) ||
          paciente.especie.toLowerCase().includes(lowerSearch) ||
          paciente.raza.toLowerCase().includes(lowerSearch) ||
          paciente.sexo.toLowerCase().includes(lowerSearch) ||
          String(paciente.id_mascota).includes(lowerSearch) ||
          String(paciente.id_cliente).includes(lowerSearch) ||
          paciente.nombre_cliente.toLowerCase().includes(lowerSearch)
      );
      setFilteredData(filtered);
    }
  }, [searchText, data]);

  // Función para cargar citas de la mascota
  const handleGenerarReporte = async (id_mascota, nombre_mascota) => {
    setLoadingCitas(true);
    setNombreMascotaSeleccionada(nombre_mascota);
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get(
        `/citas/obtener-reporte-mascota?id_mascota=${id_mascota}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        setCitasMascota(response.data.data); // arreglo de citas con tipo_servicio, fecha, peso, etc.
        setModalVisible(true);
      } else {
        console.error("Error al obtener citas:", response.data.message);
      }
    } catch (error) {
      console.error("Error en la petición axios para citas:", error);
    }
    setLoadingCitas(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id_mascota",
      key: "id_mascota",
      align: "center",
      width: 90,
    },
    {
      title: "Nombre Mascota",
      dataIndex: "nombre_mascota",
      key: "nombre_mascota",
      align: "center",
    },
    {
      title: "Especie",
      dataIndex: "especie",
      key: "especie",
      align: "center",
      width: 100,
    },
    {
      title: "Raza",
      dataIndex: "raza",
      key: "raza",
      align: "center",
      width: 120,
    },
    {
      title: "Sexo",
      dataIndex: "sexo",
      key: "sexo",
      align: "center",
      width: 80,
    },
    {
      title: "ID Dueño",
      dataIndex: "id_cliente",
      key: "id_cliente",
      align: "center",
      width: 90,
    },
    {
      title: "Dueño",
      dataIndex: "nombre_cliente",
      key: "nombre_cliente",
      align: "center",
    },
    {
      title: "Generar Reporte",
      key: "generar_reporte",
      align: "center",
      width: 140,
      render: (_, record) => (
        <Button
          type="primary"
          size="small"
          style={{ backgroundColor: "#59867b", borderColor: "#59867b" }}
          onClick={() =>
            handleGenerarReporte(record.id_mascota, record.nombre_mascota)
          }
        >
          Ver Reporte
        </Button>
      ),
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
          Lista de Pacientes (Mascotas)
        </Title>
      </div>

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
          onClick={fetchPacientes}
          loading={loading}
          shape="circle"
          size="large"
          aria-label="Recargar tabla"
          title="Recargar tabla"
        />

        <Input
          placeholder="Buscar pacientes..."
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
          rowKey="id_mascota"
          pagination={{ pageSize: 8 }}
          size="small"
          bordered
          scroll={{ x: "max-content" }} // Permite scroll horizontal si la tabla es muy ancha
        />
      </Content>

      {/* Modal para mostrar reporte de citas */}
      <Modal
        title={`Reporte de citas - ${nombreMascotaSeleccionada}`}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button
            key="exportar"
            onClick={exportarAExcel}
            style={{
              backgroundColor: "#59867b",
              borderColor: "#59867b",
              color: "white",
            }}
          >
            Exportar a Excel
          </Button>,
          <Button key="close" onClick={() => setModalVisible(false)}>
            Cerrar
          </Button>,
        ]}
        width={900}
      >
        {loadingCitas ? (
          <p>Cargando citas...</p>
        ) : citasMascota.length === 0 ? (
          <p>No se encontraron citas para esta mascota.</p>
        ) : (
          <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
            {citasMascota.map((item, index) => {
              const estado = String(item.estado_cita).toLowerCase();
              let color = "#999";

              if (estado === "1" || estado === "pendiente") color = "yellow";
              else if (estado === "2" || estado === "aceptada") color = "green";
              else if (estado === "3" || estado === "rechazada")
                color = "volcano";

              return (
                <div
                  key={item.id_cita}
                  style={{
                    border: "1px solid #f0f0f0",
                    borderRadius: 8,
                    padding: 16,
                    marginBottom: 16,
                    backgroundColor: "#fafafa",
                  }}
                >
                  <Title level={5}>Cita #{index + 1}</Title>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                  >
                    <div style={{ flex: 1 }}>
                      <strong>ID Cita:</strong> {item.id_cita}
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong>Servicio:</strong> {item.servicio}
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong>Fecha:</strong> {item.fecha_cita}
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong>Peso:</strong> {item.peso} kg
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong>Estado:</strong>{" "}
                      <Tag
                        color={color}
                        style={{
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.estado_cita}
                      </Tag>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Modal>
    </MainLayout>
  );
};

export default Pacientes;
