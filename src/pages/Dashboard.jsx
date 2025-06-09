import { Typography, Layout } from "antd";
import { Link } from "react-router-dom";
import NavBar from "../components/navbarDashboard.jsx";
import Cards from "../components/Cards.jsx";
import "../styles/Dashboard.css";
import MainLayout from "../components/MainLayoutAdmin.jsx";
import iconoCitas from "../assets/iconoCitas.png";
import iconoClientes from "../assets/iconoClientes.png";
import iconoPacientes from "../assets/iconoPaciente.png";

const { Title } = Typography;
const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <div>
      <MainLayout>
        <Header className="title_container">
          <Title className="title">
            Bienvenido al dashboard de administración
          </Title>
        </Header>
        <Content className="cards_grid_1">
          <Link to="/control-de-citas">
            <Cards
              imagen={iconoCitas}
              titulo="Citas"
              descripcion="Registro de citas."
              alturaImagen={310}
            />
          </Link>
          <Link to="/clientes">
            <Cards
              imagen={iconoClientes}
              titulo="Clientes"
              descripcion="Clientes registrados."
              alturaImagen={310}
            />
          </Link>
          <Link to="/pacientes">
            <Cards
              imagen={iconoPacientes}
              titulo="Pacientes"
              descripcion="Pacientes de la clínica."
              alturaImagen={310}
            />
          </Link>
        </Content>
      </MainLayout>
    </div>
  );
};

export default Dashboard;
