import React, { useState } from "react";
import AppUserDataService from "../../service/appuserService";

const AddAppUser = () => {
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
  const [appuser, setAppUser] = useState(initialAppUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAppUser({ ...appuser, [name]: value });
  };

  const saveAppUser = () => {
    var data = {
      id: appuser.id,
      dni: appuser.dni,
      name: appuser.name,
      username: appuser.username,
      password: appuser.password,
      age: appuser.age,
      phone: appuser.tags,
      email: appuser.email
    };

    AppUserDataService.create(data)
      .then(response => {
        setAppUser({
          id: response.data.id,
          dni: response.data.dni,
          name: response.data.name,
          username: response.data.username,
          password: response.data.password,
          age: response.data.age,
          phone: response.data.phone,
          email: response.data.email
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newAppUser = () => {
    setAppUser(initialAppUserState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newAppUser}>
            Añadir Otro
          </button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="dni">DNI</label>
            <input
              type="text"
              className="form-control"
              id="dni"
              required
              value={appuser.dni}
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
              value={appuser.weakness}
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
              value={appuser.username}
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
              value={appuser.password}
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
              value={appuser.age}
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
              value={appuser.phone}
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
              value={appuser.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <button onClick={saveAppUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddAppUser;