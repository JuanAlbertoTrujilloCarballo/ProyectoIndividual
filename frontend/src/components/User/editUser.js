import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import UserDataService from "../../service/userService";

import AuthService from "../../service/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es requerido!
      </div>
    );
  }
};

const EditUser = props => {

  const { id } = useParams();
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

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

  const updateUser = (e) => {
    e.preventDefault();

    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      UserDataService.update(currentUser.id, currentUser)
        .then(response => {
          console.log(response.data);
          setMessage("The user was updated successfully!");
          navigate("/profile");
        },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setMessage(resMessage);
          }
        );
    }
  };
  return (

    <div className="col-md-6">
      {currentUser && (
        <div className="edit-form">
          <Form onSubmit={updateUser} ref={form}>
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
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
              />
            </div>

            <button className="badge badge-success">
              Actualizar
            </button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          )

        </div>
      )
      }
    </div >
  );
};

export default EditUser;

