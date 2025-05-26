import { Typography, Layout } from 'antd';
import NavBar from "../components/navbarDashboard.jsx";
import Cards from "../components/Cards.jsx";
import "../styles/Dashboard.css"

import iconoCitas from "../assets/iconoCitas.png"
import iconoClientes from "../assets/iconoClientes.png"
import iconoPacientes from "../assets/iconoPaciente.png"

const { Title } = Typography;
const { Header, Content } = Layout;

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <Header className='title_container'>
                <Title className='title'>Bienvenido al dashboard de ardministración </Title>
            </Header>
            <Content className='cards_grid_1'>
                <Cards
                    imagen={iconoCitas}
                    titulo="Citas"
                    descripcion="Registro de citas."
                    alturaImagen={310}
                />
                <Cards
                    imagen={iconoClientes}
                    titulo="Clientes"
                    descripcion="Clientes registrados."
                    alturaImagen={310}
                />
                <Cards
                    imagen={iconoPacientes}
                    titulo="Pacientes"
                    descripcion="Pacientes de la clinica."
                    alturaImagen={310}
                />
            </Content>
        </div>
    );
}

export default Dashboard;