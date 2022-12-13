import React, { useState, useEffect } from "react";

import UserService from "../../service/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;


// import "./home.css";
// import Header from "../../components/Header/header";

// export default function Home() {

//   return (
//     <>
//     <Header />
//     <div className="home-container">
//       <div className="texto">
//         <p>
//           Esta aplicación ha sido creada usando React
//         </p>
//       </div>
//     </div>
//   </>
//   )

// }

//event para el crud
//https://www.bezkoder.com/react-hooks-crud-axios-api/