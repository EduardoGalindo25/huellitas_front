import React, { useState, useEffect, useCallback } from "react";
import { Typography, Layout, Table, Button, Modal, Input, Space } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { MdOutlineEditAttributes } from "react-icons/md";
import Swal from "sweetalert2";
import "../styles/appointmentControl.css";
import api from "../utils/axiosConfig";
import MainLayout from "../components/MainLayoutAdmin.jsx";
import AppointmentForm from "../components/AppointmentForm";
import { Tag } from "antd";
import ModalReporteServicios from "../components/ModalReporteServicios";
const { Title } = Typography;
const { Header, Content } = Layout;
const { Search } = Input;

const AppointmentControl = () => {
  const [showAgendarForm, setShowAgendarForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCita, setSelectedCita] = useState(null);
  const [estadoCita, setEstadoCita] = useState("");
  const [fechaHoraCita, setFechaHoraCita] = useState("");
  const [showReporteServicios, setShowReporteServicios] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const AgendarCita = async (values) => {
    console.log("Formulario enviado:", values);

    try {
      const response = await api.post("/citas/registrar-cita", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Cita registrada exitosamente",
          html: "Gracias por registrar la cita. No olvides confirmarla o cancelarla en el futuro.",
          confirmButtonText: "OK",
          confirmButtonColor: "#59867b",
        }).then((result) => {
          if (
            result.dismiss === Swal.DismissReason.timer ||
            result.isConfirmed
          ) {
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al agendar cita",
          text: response.data.errors,
        });
      }
    } catch (error) {
      console.error("Error del servidor:", error.response?.data?.errors);

      Swal.fire({
        icon: "error",
        title: "Error al agendar cita",
        text: error.response?.data?.errors,
        confirmButtonText: "OK",
        confirmButtonColor: "#59867b",
      });
    }
  };

  const fetchCitas = useCallback(async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      const response = await api.get("/citas/obtener-citas", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        const citasAdaptadas = response.data.data.map((item) => ({
          key: item.id_cita,
          id: item.id_cita,
          id_servicio: item.id_servicio,
          tipoServicio: item.servicio,
          paciente: item.nombre_mascota,
          dueno: item.nombre_cliente,
          fechaHora: item.fecha_cita,
          estadoCita: item.estado_cita,
        }));
        setData(citasAdaptadas);
        setFilteredData(citasAdaptadas);
      } else {
        console.error("Error al obtener citas:", response.data.message);
      }
    } catch (error) {
      console.error("Error en la petición axios:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCitas();
  }, [fetchCitas]);

  const handleSearch = (value) => {
    setSearchText(value);
    const lowerValue = value.toLowerCase();
    const filtered = data.filter((item) =>
      `${item.paciente} ${item.dueno} ${item.tipoServicio}`
        .toLowerCase()
        .includes(lowerValue)
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Tipo de servicio",
      dataIndex: "tipoServicio",
      key: "tipoServicio",
      align: "center",
    },
    {
      title: "Paciente",
      dataIndex: "paciente",
      key: "paciente",
      align: "center",
    },
    {
      title: "Dueño",
      dataIndex: "dueno",
      key: "dueno",
      align: "center",
    },
    {
      title: "Fecha y hora",
      dataIndex: "fechaHora",
      key: "fechaHora",
      align: "center",
    },
    {
      title: "Estado de la cita",
      dataIndex: "estadoCita",
      key: "estadoCita",
      align: "center",
      render: (estado) => {
        let color;
        let texto;

        switch (estado) {
          case 1:
          case "pendiente":
            color = "yellow";
            texto = "Pendiente";
            break;
          case 2:
          case "aceptada":
            color = "green";
            texto = "Confirmada";
            break;
          case 3:
          case "rechazada":
            color = "volcano";
            texto = "Cancelada";
            break;
        }

        return <Tag color={color}>{texto}</Tag>;
      },
    },

    {
      title: "Gestionar cita",
      key: "accion",
      align: "center",
      render: (_, record) => (
        <Button
          icon={<MdOutlineEditAttributes style={{ fontSize: 20 }} />}
          onClick={() => {
            setSelectedCita(record);
            setEstadoCita(record.estadoCita);
            setFechaHoraCita(record.fechaHora);
            setShowForm(true);
          }}
        >
          Gestionar
        </Button>
      ),
    },
  ];

  const formatoBackend = (fechaLocal) => {
    if (!fechaLocal) return "";
    const fechaYHora = fechaLocal.split("T");
    if (fechaYHora.length !== 2) return fechaLocal;
    return `${fechaYHora[0]} ${fechaYHora[1]}:00`;
  };

  const handleSubmit = async () => {
    if (!selectedCita || !estadoCita || !fechaHoraCita) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const token = sessionStorage.getItem("token");

      const response = await api.post(
        `/citas/gestionar-citas`,
        {
          id_cita: selectedCita.key,
          estado_cita: Number(estadoCita),
          fecha_hora_cita: formatoBackend(fechaHoraCita),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Cita actualizada exitosamente",
          html: "Recuerda que puedes volver a gestionar la cita en cualquier momento.",
          confirmButtonText: "OK",
          confirmButtonColor: "#59867b",
        }).then((result) => {
          if (
            result.dismiss === Swal.DismissReason.timer ||
            result.isConfirmed
          ) {
            setShowForm(false);
            fetchCitas();
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al agendar cita",
          text: response.data.errors,
        });
      }
    } catch (error) {
      console.error("Error del servidor:", error.response?.data?.errors);
      Swal.fire({
        icon: "error",
        title: "Error al actualizar la cita",
        text: error.response?.data?.errors,
        confirmButtonText: "OK",
        confirmButtonColor: "#59867b",
      });
    }
  };

  const handleTableChange = (newPagination) => {
    setPagination(newPagination);
  };

  return (
    <div>
      <MainLayout>
        <Header
          className="title_container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <Title level={1} className="title" style={{ margin: 0 }}>
            Control de citas
          </Title>
          {/* Botón Reporte removido de aquí */}
        </Header>
        <Content style={{ maxWidth: 1200, margin: "20px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Button
              icon={<ReloadOutlined spin={loading} />}
              onClick={fetchCitas}
              loading={loading}
              shape="circle"
              size="large"
              title="Recargar tabla"
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                style={{ backgroundColor: "#59867b", borderColor: "#59867b" }}
                onClick={() => setShowAgendarForm(true)}
              >
                Agendar Cita
              </Button>

              <Button
                type="default"
                onClick={() => setShowReporteServicios(true)}
                style={{ backgroundColor: "#59867b", color: "white" }}
              >
                Reporte por tipo de servicio
              </Button>

              <Search
                placeholder="Buscar paciente, dueño o servicio"
                allowClear
                onSearch={handleSearch}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ maxWidth: 300 }}
              />
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={pagination}
            loading={loading}
            bordered
            onChange={handleTableChange}
            rowKey="id"
            scroll={{ x: "max-content" }} // permite scroll horizontal automático según el contenido
          />

          <Modal
            open={showAgendarForm}
            onCancel={() => setShowAgendarForm(false)}
            footer={null} // Asumiendo que el formulario tiene su propio botón de enviar
            title="Agendar Nueva Cita"
          >
            <AppointmentForm
              onFinish={async (values) => {
                await AgendarCita(values);
                setShowAgendarForm(false);
                fetchCitas(); // Opcional: refrescar lista después de agendar
              }}
            />
          </Modal>

          <Modal
            open={showForm}
            onCancel={() => setShowForm(false)}
            onOk={handleSubmit}
            okText="Enviar"
            cancelText="Cancelar"
            title="Actualizar cita"
            okButtonProps={{
              style: {
                backgroundColor: "#59867b",
                borderColor: "#389e0d",
                color: "white",
              },
            }}
          >
            <div className="modal-contenido-cita">
              <label>ID de la cita:</label>
              <select
                value={selectedCita?.id}
                onChange={(e) => {
                  const cita = data.find(
                    (c) => c.id === parseInt(e.target.value)
                  );
                  setSelectedCita(cita);
                  setFechaHoraCita(cita.fechaHora);
                  setEstadoCita(cita.estadoCita);
                }}
              >
                {data.map((cita) => (
                  <option key={cita.id} value={cita.id}>
                    #{cita.id} - {cita.paciente}
                  </option>
                ))}
              </select>

              <label>Nuevo estado:</label>
              <select
                value={estadoCita}
                onChange={(e) => setEstadoCita(e.target.value)}
              >
                <option value="">Seleccione un estado</option>
                <option value="1">Pendiente</option>
                <option value="2">Confirmada</option>
                <option value="3">Cancelada</option>
              </select>

              <label>Fecha y hora:</label>
              <input
                type="datetime-local"
                value={fechaHoraCita}
                readOnly
                disabled
              />
            </div>
          </Modal>
          <ModalReporteServicios
            citas={data}
            visible={showReporteServicios}
            onClose={() => setShowReporteServicios(false)}
          />
        </Content>
      </MainLayout>
    </div>
  );
};

export default AppointmentControl;
