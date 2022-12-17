import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../service/auth.service";
import UserDataService from "../../service/userService";
import "./Profile.scss"

const Profile = () => {

  let navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  // let navigate = useNavigate();

  const logOut = () => {
    AuthService.logout();
    // navigate("/eventList");
  };

  const Edit = () => {
    //AuthService.logout();
    navigate("/user/" + currentUser.id);
  };

  const initialUserState = {
    id: null,
    dni: "",
    name: "",
    username: "",
    age: "",
    phone: "",
    email: "",
    password: "",
  };

  const { id } = useParams();
  const [User, setUser] = useState(initialUserState);


  const getUser = id => {
    UserDataService.get(currentUser.id)
      .then(response => {
        setUser(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (currentUser.id)
      getUser(currentUser.id);
  }, [currentUser.id]);



  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Usuario <strong>{currentUser.username}</strong>
        </h3>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>

      <p>
        <strong>Nombre:</strong> {User.name}
      </p>
      <p>
        <strong>DNI:</strong> {User.dni}
      </p>
      <p>
        <strong>Edad:</strong> {User.age}
      </p>
      <p>
        <strong>Telefono:</strong> {User.phone}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>

      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
   
   
       
        <div className="buttons-distribution">
        <a href="login">
          <button onClick={logOut} className="button-85">
            LogOut
          </button>
        </a>
          <button onClick={Edit} className="button-62">
            Edit
          </button>
        </div>
      
      
    </div>
  );
};

export default Profile;