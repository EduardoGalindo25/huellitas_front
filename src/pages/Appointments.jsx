import AppointmentForm from "../components/AppointmentForm";
import { Typography } from "antd";
import axios from "axios"; // Importa axios

const { Title } = Typography;

const Appointments = () => {
  const handleSubmit = async (values) => {
    console.log("Formulario enviado:", values);

    try {
      const response = await axios.post(
        "api/citas/registrar",
        values, // axios ya convierte a JSON automáticamente
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Cita registrada con éxito");
    } catch (error) {
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
      } else {
        console.error("Error de conexión:", error.message);
      }
    }
  };

  return (
    <div className="centered-container">
      <Title level={3}>Nueva cita</Title>
      <AppointmentForm onFinish={handleSubmit} />
    </div>
  );
};

export default Appointments;
