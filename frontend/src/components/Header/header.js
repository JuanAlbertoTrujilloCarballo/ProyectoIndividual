import "./header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import AuthService from "../../service/auth.service";

export default function Header() {

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);


  return (
    <>
      <div>
        <nav className="header">
          <a href="/eventList" className="header-link">
            Event
          </a>
          <a href="/home" className="header-link">
            Información
          </a>
          {/*<div>
           <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> 
          </div>*/}

          {/* {showAdminBoard && (
            <a to={"/admin"} className="header-link">
              Admin Board
            </a>
          )} */}


          {currentUser ? (
            <>
              <a href={"/profile"} className="header-link-signin">
                {currentUser.username}
              </a>
              {/* <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a> */}
            </>
          ) : (
            <a href="/login" className="header-link-signin">
              Iniciar sesión
            </a>
          )}
        </nav>
      </div>
    </>
  );
}

{/* <nav className="header">
<a href="/home" className="header-link">
  Home
</a>
<div>
  <a href="/list" className="header-link">
    List
  </a>
  <a href="/add" className="navbar-brand">
    Add
  </a> */}

{/* <nav className="navbar navbar-expand navbar-dark bg-dark">
  <a href="/home" className="navbar-brand">
    Home
  </a>
  <div className="navbar-nav mr-auto">
    <a href="/list" className="navbar-brand">
      List
    </a>
    <a href="/add" className="navbar-brand">
      Add
    </a> */}