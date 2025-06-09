import MainLayout from "../components/MainLayout";
import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";
import banner from "../assets/Banner.png";
import consulta from "../assets/consulta.jpg";
import estetica from "../assets/estetica.jpg";
import cirugia from "../assets/cirugia.jpg";
import pension from "../assets/pension.jpg";
import adopcion from "../assets/adopcion.jpg";
import hospital from "../assets/hospital.jpg";

const Servicios = () => {
  return (
    <MainLayout>
      <Banner
        imagen={banner}
        titulo="Somos una nueva experiencia veterinaria para tu mascota"
      />
      <div className="cards_grid_1">
        <Cards
          imagen={consulta}
          titulo="Consulta General Veterinaria"
          descripcion="Examen completo para evaluar la salud de tu mascota."
          alturaImagen={250}
          idCards={2}
        />
        <Cards
          imagen={estetica}
          titulo="Estética y baño"
          descripcion="Servicio especializado en la limpieza y cuidado de tu mascota."
          alturaImagen={250}
          idCards={1}
        />
        <Cards
          imagen={cirugia}
          titulo="Cirugía y tratamientos"
          descripcion="Proceso llevado por especialistas en cirugía veterinaria."
          alturaImagen={250}
          idCards={3}
        />
      </div>
      <div className="cards_grid_2">
        <Cards
          imagen={pension}
          titulo="Pensión"
          descripcion="Cuidado y resguardo para tus mascotas."
          alturaImagen={250}
          idCards={5}
        />
        <Cards
          imagen={hospital}
          titulo="Hospitalización"
          descripcion="Atención médica especializada para mascotas que requieren cuidados intensivos."
          alturaImagen={250}
          idCards={4}
        />
        <Cards
          imagen={adopcion}
          titulo="Adopción de mascotas"
          descripcion="Proceso de adopción responsable y amoroso para encontrar un hogar adecuado para mascotas."
          alturaImagen={250}
          idCards={6}
        />
      </div>
    </MainLayout>
  );
};

export default Servicios;
