import React from "react";
// import { useNavigate } from "react-router-dom";
import AuthService from "../../service/auth.service";


const Profile = () => {

  // let navigate = useNavigate();

  const logOut = () => {
    AuthService.logout();
    // navigate("/eventList");
  };

  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

      <a href="login">
        <button onClick={logOut}>
          LogOut
        </button>
      </a>
    </div>
  );
};

export default Profile;