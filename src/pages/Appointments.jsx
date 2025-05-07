import AppointmentForm from "../components/AppointmentForm";
import { Typography } from "antd";

const { Title } = Typography;

const Appointments = () => {
  const handleSubmit = (values) => {
    console.log("Formulario enviado:", values);
  };

  return (
    <div className="centered-container">
      <Title level={3}>Nueva cita</Title>
      <AppointmentForm onFinish={handleSubmit} />
    </div>
  );
};

export default Appointments;
