import "./home.css";
import Header from "../../components/Header/header";

export default function Home() {

  return (
    <>
    <Header />
    <div className="home-container">
      <div className="texto">
        <p>
          Esta aplicación ha sido creada usando React
        </p>
      </div>
    </div>
  </>
  )

}

//event para el crud
//https://www.bezkoder.com/react-hooks-crud-axios-api/