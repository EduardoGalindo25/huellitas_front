import { Form, Input, Button } from "antd";

const AppointmentForm = ({ onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ width: "100%", maxWidth: 400 }}
    >
      <Form.Item name="nombre" label="Nombre" rules={[{ required: true }]}>
        <Input placeholder="Nombre" />
      </Form.Item>
      <Form.Item
        name="apellidos"
        label="Apellidos"
        rules={[{ required: true }]}
      >
        <Input placeholder="Apellidos" />
      </Form.Item>
      <Form.Item name="telefono" label="Teléfono" rules={[{ required: true }]}>
        <Input placeholder="Teléfono" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AppointmentForm;
