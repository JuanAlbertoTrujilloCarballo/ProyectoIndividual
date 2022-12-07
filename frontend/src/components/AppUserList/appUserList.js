import React, { useState, useEffect } from "react";
import AppUserDataService from "../../service/appuserService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./appUserList.scss"

const AppUserList = () => {
  const [appuser, setAppUser] = useState([]);
  const [currentAppUser, setCurrentAppUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setsearchTitle] = useState("");

  useEffect(() => {
    retrieveAppUser();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setsearchTitle(searchTitle);
  };

  const retrieveAppUser = () => {
    AppUserDataService.getAll()
      .then(response => {
        setAppUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveAppUser();
    setCurrentAppUser(null);
    setCurrentIndex(-1);
  };

  const setActiveAppUser = (appuser, index) => {
    setCurrentAppUser(appuser);
    setCurrentIndex(index);
  };

  const removeAllAppUser = () => {
    AppUserDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    AppUserDataService.findByTitle(searchTitle)
      .then(response => {
        setAppUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const navigate = useNavigate();

  const addPage=() => {
    navigate("/addAppUser");
  }


  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="create-appuser-div">
        <button
              className="add-button"
              type="button"
              onClick={addPage}
            >
              Crear nuevo Usuario
            </button>

        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    
    {/* aqui empieza la lista de appuseros */}

      <div className="col-md-6">
        <h4>AppUser List</h4>

        <ul className="list-group">
          {appuser &&
            appuser.map((appuser, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveAppUser(appuser, index)}
                key={index}
              >
                {appuser.name}
                <p></p>
                {appuser.dni}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllAppUser}
        >
          Remove All
        </button>
      </div>

      {/* aqui termina la lista de appuseros */}

      <div className="col-md-6">
        {currentAppUser ? (
          <div>
            <h4>AppUser</h4>
            <div>
              <label>
                <strong>Nombre:</strong>
              </label>{" "}
              {currentAppUser.name}
            </div>
            <div>
              <label>
                <strong>Dni:</strong>
              </label>{" "}
              {currentAppUser.dni}
            </div>
            <div>
              <label>
                <strong>Usuario:</strong>
              </label>{" "}
              {currentAppUser.username}
            </div>
            <div>
              <label>
                <strong>Edad:</strong>
              </label>{" "}
              {currentAppUser.age}
            </div>

            <Link
              to={"/appuser/" + currentAppUser.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a AppUser...</p>
          </div>
        )}
      </div>
    </div>



  );
};

export default AppUserList;