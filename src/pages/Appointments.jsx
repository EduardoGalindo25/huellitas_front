import AppointmentForm from "../components/AppointmentForm";
import { Typography } from "antd";
import MainLayout from "../components/MainLayout";
import api from "../utils/axiosConfig";
const { Title } = Typography;
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
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
          html: "Gracias por registrar tu cita. Pronto recibirás una confirmación.\nRedirigiendo a la página de inicio...",
          confirmButtonText: "OK",
          confirmButtonColor: "#59867b",
        }).then((result) => {
          if (
            result.dismiss === Swal.DismissReason.timer ||
            result.isConfirmed
          ) {
            navigate("/");
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

  return (
    <MainLayout>
      <div className="centered-container">
        <Title level={3}>Nueva cita</Title>
        <AppointmentForm onFinish={handleSubmit} />
      </div>
    </MainLayout>
  );
};

export default Appointments;
