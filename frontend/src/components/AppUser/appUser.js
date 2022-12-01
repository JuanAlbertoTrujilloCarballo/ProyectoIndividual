import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import AppUserDataService from "../../service/appuserService";

const AppUser = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialAppUserState = {
    id: null,
    dni: "",
    name: "",
    username: "",
    password: "",
    age: "",
    phone: "",
    email: "",
  };
  const [currentAppUser, setcurrentAppUser] = useState(initialAppUserState);
  const [message, setMessage] = useState("");

  const getAppUser = id => {
    AppUserDataService.get(id)
      .then(response => {
        setcurrentAppUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getAppUser(id);
  }, [id]);

  const handleInputChange = AppUser => {
    const { name, value } = AppUser.target;
    setcurrentAppUser({ ...currentAppUser, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentAppUser.id,
      dni: currentAppUser.dni,
      name: currentAppUser.name,
      username: currentAppUser.username,
      password: currentAppUser.password,
      age: currentAppUser.age,
      phone: currentAppUser.phone,
      email: currentAppUser.email,
    };

    AppUserDataService.update(currentAppUser.id, data)
      .then(response => {
        setcurrentAppUser({ ...currentAppUser, url: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateAppUser = () => {
    AppUserDataService.update(currentAppUser.id, currentAppUser)
      .then(response => {
        console.log(response.data);
        setMessage("The appuser was updated successfully!");
        navigate("/appuserList");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteAppUser = () => {
    AppUserDataService.remove(currentAppUser.id)
      .then(response => {
        console.log(response.data);
        navigate("/appuserList");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (

    <div>
      {currentAppUser ? (
        <div className="edit-form">
          <h4>AppUser</h4>
          <form>
            <div className="form-group">
              <label htmlFor="dni">Dni</label>
              <input
                type="text"
                className="form-control"
                id="dni"
                required
                value={currentAppUser.dni}
                onChange={handleInputChange}
                name="dni"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={currentAppUser.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={currentAppUser.username}
                onChange={handleInputChange}
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={currentAppUser.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Edad</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={currentAppUser.age}
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
                value={currentAppUser.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={currentAppUser.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
          </form>
          {/* <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentAppUser.url ? "Published" : "Pending"}
            </div>
         

          {currentAppUser.url ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )} */}

          <button className="badge badge-danger mr-2" onClick={deleteAppUser}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateAppUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a AppUser...</p>
        </div>
      )}
    </div>

  );
};

export default AppUser;