import { Typography, Layout, Space, Table, Button } from 'antd';
import NavBar from "../components/navbarDashboard.jsx";
import "../styles/appointmentControl.css"
import { MdOutlineEditAttributes } from "react-icons/md";


const { Title } = Typography;
const { Header, Content } = Layout;


const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    },
    {
        title: 'Tipo de servicio',
        dataIndex: 'tipoServicio',
        key: 'tipoServicio',
        align: 'center',
    },
    {
        title: 'Paciente',
        dataIndex: 'paciente',
        key: 'paciente',
        align: 'center',
    },
    {
        title: 'Dueño',
        dataIndex: 'dueno',
        key: 'dueno',
        align: 'center',
    },
    {
        title: 'Fecha y hora',
        dataIndex: 'fechaHora',
        key: 'fechaHora',
        align: 'center',
    },
    {
        title: 'Gestionar cita',
        key: 'accion',
        align: 'center',
        render: (_, record) => (
            <div className='manage_button'
                onClick={() => console.log("Gestionar cita ID:", record.id)}
                title="Gestionar"
            >
                <MdOutlineEditAttributes style={{ fontSize: 35, marginRight: 8 }} />
                <span>Gestionar</span>
            </div>
        ),
    }


];

const data = [
    {
        key: '1',
        id: 101,
        tipoServicio: 'Consulta general',
        paciente: 'Lucas',
        dueno: 'Carlos Pérez',
        fechaHora: '2025-06-01 10:00',
    },
    
];

const appointmentControl = () => {
    return (
        <div>
            <NavBar />
            <Header className='title_container'>
                <Title className='title'>Control de citas </Title>
            </Header>
            <Content>
                <div className="tabla-contenedor">
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </Content>

        </div>
    );
}

export default appointmentControl;