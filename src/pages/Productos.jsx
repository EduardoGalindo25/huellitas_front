import NavBar from "../components/navbarServicios.jsx";
import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";

import banner from "../assets/Banner2.png";
import croquetas from "../assets/croquetas.jpg";
import prodBano from "../assets/prodBano.png";
import prodDental from "../assets/prodDental.jpg";
import rascador from "../assets/rascador.png";
import juguetes from "../assets/juguetes.jpg";
import platos from "../assets/platos.jpg";

const Productos = () => {
  return (
    <div className="main-container">
      <NavBar />
      <Banner
        imagen={banner}
        titulo="Contamos con los mejores productos para tu peludo"
      />
      <div className="cards_grid_1">
        <Cards
          imagen={croquetas}
          titulo="Croquetas para Perros"
          descripcion="Alimento balanceado y nutritivo, de tus marcas favoritas, para perros todas las razas y tamaños."
          alturaImagen={250}
        />
        <Cards
          imagen={prodBano}
          titulo="Productos de baño para Perros"
          descripcion="Shampoos, acondicionadores y productos de baño para mantener a tu perro limpio y saludable."
          alturaImagen={250}
        />
        <Cards
          imagen={prodDental}
          titulo="Productos dentales para Perros"
          descripcion="Productos para el cuidado dental de tu perro, incluyendo cepillos y pastas dentales."
          alturaImagen={250}
        />
      </div>
      <div className="cards_grid_2">
        <Cards
          imagen={juguetes}
          titulo="Juguetes varios"
          descripcion="Juguetes interactivos y entretenidos para mantener a tu mascota activa y feliz."
          alturaImagen={250}
        />
        <Cards
          imagen={rascador}
          titulo="Torres para Gatos"
          descripcion="Estructuras de juego y descanso para gatos, ideales para rascar y escalar."
          alturaImagen={250}
        />
        <Cards
          imagen={platos}
          titulo="Platos para comida y agua"
          descripcion="Platos de diferentes tamaños y estilos para la comida y el agua de tu mascota."
          alturaImagen={250}
        />
      </div>
    </div>
  );
};

export default Productos;
