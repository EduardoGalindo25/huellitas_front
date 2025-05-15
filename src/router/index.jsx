import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Productos from "../pages/Productos";
import Banner from "../components/Banner";
import Citas from "../pages/Appointments";

const router = createHashRouter([
  {
    path: "/banner",
    element: <Banner />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/agendar-citas",
    element: <Citas />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
]);

export default router;
