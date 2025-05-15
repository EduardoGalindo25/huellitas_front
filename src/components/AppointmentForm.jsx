import { Form, Input, Button, Select, DatePicker } from "antd";
import NavbarServicios from "../components/navbarServicios";
import dayjs from "dayjs";

const { Option } = Select;

const AppointmentForm = ({ onFinish }) => {
  const [form] = Form.useForm();

  // Función que se ejecuta al enviar el formulario
  const handleFinish = (values) => {
    // Formatea la fecha y hora a "YYYY-MM-DD HH:mm:ss"
    const fechaHoraCita = values.fecha_hora_cita.format("YYYY-MM-DD HH:mm:ss");

    const finalValues = {
      ...values,
      fecha_hora_cita: fechaHoraCita,
    };

    onFinish(finalValues); // Llama a la función que viene del componente padre
    form.resetFields(); // Limpia todos los campos del formulario
  };

  return (
    <>
      <NavbarServicios />
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
          {/* Campos de la mascota */}
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
            <Input placeholder="Especie de la mascota" />
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
              <Option value={2}>Macho</Option>
              <Option value={1}>Hembra</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="peso_mascota"
            label="Peso de la mascota"
            rules={[{ required: true, message: "Campo requerido" }]}
          >
            <Input placeholder="Peso en kg" type="number" />
          </Form.Item>

          {/* Campos del cliente */}
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
            name="fecha_hora_cita"
            label="Fecha y hora de la cita"
            rules={[{ required: true, message: "Campo requerido" }]}
          >
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Selecciona fecha y hora"
              style={{ width: "100%" }}
            />
          </Form.Item>

          {/* Botón de enviar */}
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
    </>
  );
};

export default AppointmentForm;
