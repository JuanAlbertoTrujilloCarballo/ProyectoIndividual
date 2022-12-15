import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import UserDataService from "../../service/userService";

import AuthService from "../../service/auth.service";

const editUser = props => {

  const { id } = useParams();
  let navigate = useNavigate();

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

  const [currentUser, setCurrentUser] = useState(initialUserState);
  const [message, setMessage] = useState("");

  const getUser = id => {
    UserDataService.get(id)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getUser(id);
  }, [id]);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentUser.id,
      dni: currentUser.dni,
      name: currentUser.name,
      username: currentUser.username,
      age: currentUser.age,
      phone: currentUser.phone,
      email: currentUser.email,
      password: currentUser.password,
    };

    UserDataService.update(currentUser.id, data)
      .then(response => {
        setCurrentUser({ ...currentUser, url: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateUser = () => {
    UserDataService.update(currentUser.id, currentUser)
      .then(response => {
        console.log(response.data);
        setMessage("The user was updated successfully!");
        navigate("/profile");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (

    <div className="col-md-6">
      {currentUser && (
        <div className="edit-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={currentUser.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dni">Dni</label>
              <input
                type="text"
                className="form-control"
                id="dni"
                required
                value={currentUser.dni}
                onChange={handleInputChange}
                name="dni"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Edad</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={currentUser.age}
                onChange={handleInputChange}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={currentUser.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={currentUser.username}
                onChange={handleInputChange}
                name="username"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={currentUser.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={currentUser.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>

          </form>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateUser}
          >
            Actualizar
          </button>
            )

        </div>
      )}
    </div>
  );
};

export default editUser;

