import "./home.css";
import Header from "../../components/Header/header";

export default function Home() {

  return (
    <>
    <Header />
    <div className="home-container">
      <div className="texto">
        <p>
          Sabios Guias Intérpretes un programa intergeneracional de promoción
          del patrimonio y la cultura a través de la sabiduría
          de las personas mayores.
        </p>
        <p>
          Guiar y saber interpretar el paisaje y su historia
          acercándolo de forma peculiar a todos los públicos,
          es una labor que los Sabios Guías Intérpretes
          desarrollan con gran orgullo y capacidad.
        </p>
      </div>
    </div>
  </>
  )

}

//monster para el crud
//https://www.bezkoder.com/react-hooks-crud-axios-api/