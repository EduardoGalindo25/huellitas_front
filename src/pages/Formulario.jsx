import { Form, Input, Button, Typography } from "antd";
//import "../styles/Formulario.css"; // asegúrate de incluir el CSS de arriba

const { Title } = Typography;

function Formulario() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Datos:", values);
  };

  return (
    <div className="centered-container">
      <Title level={3}>Nueva cita</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: "Ingresa tu nombre" }]}
        >
          <Input placeholder="Nombre" />
        </Form.Item>

        <Form.Item
          label="Apellidos"
          name="apellidos"
          rules={[{ required: true, message: "Ingresa tus apellidos" }]}
        >
          <Input placeholder="Apellidos" />
        </Form.Item>

        <Form.Item
          label="Teléfono"
          name="telefono"
          rules={[
            { required: true, message: "Ingresa tu número" },
            { pattern: /^[0-9]+$/, message: "Solo números" },
          ]}
        >
          <Input placeholder="Teléfono" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Formulario;
