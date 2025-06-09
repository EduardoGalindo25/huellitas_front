import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import api from "../utils/axiosConfig";
const { Option } = Select;
import { Spin } from "antd";
import { InputNumber } from "antd";
const AppointmentForm = ({ onFinish }) => {
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams();
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [loadingHorarios, setLoadingHorarios] = useState(false);
  const servicioPreseleccionado = searchParams.get("servicio");

  useEffect(() => {
    if (servicioPreseleccionado) {
      form.setFieldsValue({ servicio_cita: Number(servicioPreseleccionado) });
    }
  }, [servicioPreseleccionado, form]);

  const cargarHorariosDisponibles = async (fecha) => {
    if (!fecha) return;
    setLoadingHorarios(true);
    try {
      const fechaStr = fecha.format("YYYY-MM-DD");
      const response = await api.get(
        `/citas/fechas-disponibles?fecha_cita=${fechaStr}`
      );
      if (response.data.success) {
        setHorariosDisponibles(response.data.data.map((h) => h.horario));
      } else {
        message.error("No se pudieron cargar los horarios disponibles");
        setHorariosDisponibles([]);
      }
    } catch (error) {
      message.error("Error al cargar horarios disponibles");
      setHorariosDisponibles([]);
    } finally {
      setLoadingHorarios(false);
    }
  };

  const onChangeFecha = (value) => {
    setFechaSeleccionada(value);
    form.setFieldsValue({ horario: null });
    cargarHorariosDisponibles(value);
  };

  const handleFinish = (values) => {
    const fecha = dayjs(values.fecha);
    const hora = values.horario;
    const fechaHora = `${fecha.format("YYYY-MM-DD")} ${hora}`;
    const datosFinales = {
      nombre_cliente: values.nombre_cliente,
      numero_cliente: values.numero_cliente,
      correo_cliente: values.correo_cliente,
      nombre_mascota: values.nombre_mascota,
      especie_mascota: values.especie_mascota,
      raza_mascota: values.raza_mascota,
      sexo_mascota: values.sexo_mascota,
      peso_mascota: Number(values.peso_mascota),
      servicio_cita: values.servicio_cita,
      fecha_hora_cita: fechaHora,
    };

    onFinish(datosFinales);
    form.resetFields();
    setHorariosDisponibles([]);
    setFechaSeleccionada(null);
  };

  const horariosFiltrados = horariosDisponibles
    .filter((h) => {
      // Solo horarios del día seleccionado
      const horarioFecha = dayjs(h);
      const fechaSel = dayjs(fechaSeleccionada);
      if (horarioFecha.format("YYYY-MM-DD") !== fechaSel.format("YYYY-MM-DD")) {
        return false;
      }

      // Si la fecha seleccionada es hoy, filtrar horarios mayores a la hora actual
      if (fechaSel.isSame(dayjs(), "day")) {
        return horarioFecha.isAfter(dayjs());
      }

      // Si la fecha no es hoy, mostrar todos
      return true;
    })
    .map((h) => dayjs(h).format("HH:mm:ss"));

  const SEXO = {
    HEMBRA: 1,
    MACHO: 2,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        minHeight: "100vh",
        backgroundColor: "#f5f7f6",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          padding: "30px 20px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Campos mascota */}
        <Form.Item
          name="nombre_mascota"
          label="Nombre de la mascota"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Input placeholder="Nombre de la mascota" />
        </Form.Item>

        <Form.Item
          name="especie_mascota"
          label="Especie de la mascota"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Select placeholder="Selecciona la especie">
            <Option value="Perro">Perro</Option>
            <Option value="Gato">Gato</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="raza_mascota"
          label="Raza de la mascota"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Input placeholder="Raza de la mascota" />
        </Form.Item>

        <Form.Item
          name="sexo_mascota"
          label="Sexo de la mascota"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Select placeholder="Selecciona el sexo">
            <Option value={SEXO.MACHO}>Macho</Option>
            <Option value={SEXO.HEMBRA}>Hembra</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="peso_mascota"
          label="Peso de la mascota"
          rules={[
            { required: true, message: "Campo requerido" },
            { type: "number", min: 0, message: "El peso debe ser mayor a 0" },
          ]}
        >
          <InputNumber placeholder="Peso en kg" style={{ width: "100%" }} />
        </Form.Item>

        {/* Campos cliente */}
        <Form.Item
          name="nombre_cliente"
          label="Nombre del cliente"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Input placeholder="Nombre del cliente" />
        </Form.Item>

        <Form.Item
          name="numero_cliente"
          label="Número de cliente"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Input placeholder="Número de cliente" />
        </Form.Item>

        <Form.Item
          name="correo_cliente"
          label="Correo del cliente"
          rules={[
            { required: true, type: "email", message: "Campo requerido" },
          ]}
        >
          <Input placeholder="Correo electrónico" />
        </Form.Item>

        {/* Tipo de servicio */}
        <Form.Item
          name="servicio_cita"
          label="Tipo de servicio"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <Select placeholder="Selecciona el tipo de servicio">
            <Option value={1}>Estética</Option>
            <Option value={2}>Consulta</Option>
            <Option value={3}>Cirugía</Option>
            <Option value={4}>Hospitalización</Option>
            <Option value={5}>Pensión</Option>
            <Option value={6}>Adopción</Option>
          </Select>
        </Form.Item>

        {/* Fecha y hora de la cita */}
        <Form.Item
          name="fecha"
          label="Fecha de la cita"
          rules={[{ required: true, message: "Campo requerido" }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            disabledDate={(current) =>
              current && current < dayjs().startOf("day")
            }
            onChange={onChangeFecha}
          />
        </Form.Item>
        <Spin spinning={loadingHorarios}>
          <Form.Item
            name="horario"
            label="Hora de la cita"
            rules={[
              { required: true, message: "Selecciona un horario disponible" },
            ]}
          >
            <Select
              placeholder="Selecciona un horario disponible"
              disabled={!horariosFiltrados.length}
              showSearch
              filterOption={(input, option) =>
                option?.value?.toLowerCase().includes(input.toLowerCase())
              }
            >
              {horariosFiltrados.map((hora) => (
                <Option key={hora} value={hora}>
                  {hora}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Spin>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              backgroundColor: "#59867b",
              borderColor: "#59867b",
              fontWeight: "bold",
            }}
          >
            Agendar cita
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppointmentForm;
