import React, { useState, useEffect } from "react";
import { Modal, Button, Select, Table, Tag } from "antd";
import * as XLSX from "xlsx";

const { Option } = Select;

const servicios = {
  1: "Estética",
  2: "Consulta General",
  3: "Cirugía",
  4: "Hospital",
  5: "Pensión",
  6: "Adopción",
};

const getEstadoTag = (estado) => {
  switch (estado) {
    case "pendiente":
      return <Tag color="yellow">Pendiente</Tag>;
    case "aceptada":
      return <Tag color="green">Confirmada</Tag>;
    case "rechzada":
      return <Tag color="red">Cancelada</Tag>;
    default:
      return <Tag>{estado}</Tag>;
  }
};

const ModalReporteServicios = ({ citas = [], visible, onClose }) => {
  const [tipoServicio, setTipoServicio] = useState(null);

  useEffect(() => {
    if (!visible) setTipoServicio(null);
  }, [visible]);

  const citasUnicas = Array.from(new Map(citas.map((c) => [c.id, c])).values());

  const citasFiltradas = tipoServicio
    ? citasUnicas.filter((c) => c.id_servicio === tipoServicio)
    : [];

  const columnas = [
    { title: "ID", dataIndex: "id_servicio", key: "id_servicio" },
    { title: "Paciente", dataIndex: "paciente", key: "paciente" },
    { title: "Dueño", dataIndex: "dueno", key: "dueno" },
    { title: "Fecha y hora", dataIndex: "fechaHora", key: "fechaHora" },
    {
      title: "Estado",
      dataIndex: "estadoCita",
      key: "estadoCita",
      render: (estado) => getEstadoTag(estado),
    },
  ];

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(citasFiltradas);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "CitasServicio");
    XLSX.writeFile(wb, `Reporte_Citas_${servicios[tipoServicio]}.xlsx`);
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      title="Reporte por tipo de servicio"
    >
      <Select
        placeholder="Selecciona tipo de servicio"
        style={{ width: "100%", marginBottom: 16 }}
        onChange={(value) => setTipoServicio(Number(value))}
        value={tipoServicio}
        allowClear
      >
        {Object.entries(servicios).map(([key, label]) => (
          <Option key={key} value={Number(key)}>
            {label}
          </Option>
        ))}
      </Select>

      <Table
        columns={columnas}
        dataSource={citasFiltradas}
        rowKey="id"
        pagination={false}
        bordered
      />

      {citasFiltradas.length > 0 && (
        <Button
          onClick={exportToExcel}
          type="primary"
          style={{
            marginTop: 16,
            backgroundColor: "#59867b",
            borderColor: "#59867b",
          }}
        >
          Exportar a Excel
        </Button>
      )}
    </Modal>
  );
};

export default ModalReporteServicios;
