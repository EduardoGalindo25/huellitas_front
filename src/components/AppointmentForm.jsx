import { Form, Input, Button, Select } from "antd";
import NavbarServicios from "../components/navbarServicios";
const { Option } = Select;

const AppointmentForm = ({ onFinish }) => {
  const [form] = Form.useForm();

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
          onFinish={onFinish}
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
            name="nombreMascota"
            label="Nombre de la mascota"
            rules={[{ required: true }]}
          >
            <Input placeholder="Nombre de la mascota" />
          </Form.Item>

          <Form.Item
            name="especieMascota"
            label="Especie de la mascota"
            rules={[{ required: true }]}
          >
            <Input placeholder="Especie de la mascota" />
          </Form.Item>

          <Form.Item
            name="razaMascota"
            label="Raza de la mascota"
            rules={[{ required: true }]}
          >
            <Input placeholder="Raza de la mascota" />
          </Form.Item>

          <Form.Item
            name="sexoMascota"
            label="Sexo de la mascota"
            rules={[{ required: true }]}
          >
            <Select placeholder="Selecciona el sexo">
              <Option value="macho">Macho</Option>
              <Option value="hembra">Hembra</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="pesoMascota"
            label="Peso de la mascota"
            rules={[{ required: true }]}
          >
            <Input placeholder="Peso en kg" type="number" />
          </Form.Item>

          {/* Campos del cliente */}
          <Form.Item
            name="nombreCliente"
            label="Nombre del cliente"
            rules={[{ required: true }]}
          >
            <Input placeholder="Nombre del cliente" />
          </Form.Item>

          <Form.Item
            name="numeroCliente"
            label="Número de cliente"
            rules={[{ required: true }]}
          >
            <Input placeholder="Número de cliente" />
          </Form.Item>

          <Form.Item
            name="correoCliente"
            label="Correo del cliente"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Correo electrónico" />
          </Form.Item>

          {/* Tipo de servicio */}
          <Form.Item
            name="tipoServicio"
            label="Tipo de servicio"
            rules={[{ required: true }]}
          >
            <Select placeholder="Selecciona el tipo de servicio">
              <Option value="estetica">Estética</Option>
              <Option value="consulta">Consulta</Option>
              <Option value="cirugia">Cirugía</Option>
              <Option value="hospital">Hospitalización</Option>
              <Option value="pension">Pensión</Option>
              <Option value="adopcion">Adopción</Option>
            </Select>
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
