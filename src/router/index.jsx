import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Productos from "../pages/Productos";
import Banner from "../components/Banner";
import Citas from "../pages/Appointments";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AppointmentControl from "../pages/appointmentControl";
import PrivateRoute from "../router/PrivateRouter";
import PageWrapper from "../components/PageWrapper";
import Clientes from "../pages/Clientes";
import Mascotas from "../pages/Pacientes";
const router = createHashRouter([
  {
    path: "/",
    element: (
      <PageWrapper>
        <Home />
      </PageWrapper>
    ),
  },
  {
    path: "/agendar-citas",
    element: (
      <PageWrapper>
        <Citas />
      </PageWrapper>
    ),
  },
  {
    path: "/servicios",
    element: (
      <PageWrapper>
        <Servicios />
      </PageWrapper>
    ),
  },
  {
    path: "/productos",
    element: (
      <PageWrapper>
        <Productos />
      </PageWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <PageWrapper>
        <Login />
      </PageWrapper>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <PageWrapper>
          <Dashboard />
        </PageWrapper>
      </PrivateRoute>
    ),
  },
  {
    path: "/control-de-citas",
    element: (
      <PrivateRoute>
        <PageWrapper>
          <AppointmentControl />
        </PageWrapper>
      </PrivateRoute>
    ),
  },
  {
    path: "/banner",
    element: (
      <PageWrapper>
        <Banner />
      </PageWrapper>
    ),
  },
  {
    path: "/clientes",
    element: (
      <PrivateRoute>
        <PageWrapper>
          <Clientes />
        </PageWrapper>
      </PrivateRoute>
    ),
  },
  {
    path: "/pacientes",
    element: (
      <PrivateRoute>
        <PageWrapper>
          <Mascotas />
        </PageWrapper>
      </PrivateRoute>
    ),
  },
]);

export default router;
