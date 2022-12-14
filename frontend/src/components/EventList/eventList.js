import React, { useState, useEffect } from "react";
import EventDataService from "../../service/eventService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./eventList.scss"

import UserService from "../../service/user.service";
import AuthService from "../../service/auth.service";


const EventList = () => {
  const [event, setEvent] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setsearchTitle] = useState("");
  const [content, setContent] = useState("");
  const [showAdminBoard, setAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setAdmin(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
        console.log(content)
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

  useEffect(() => {
    retrieveEvent();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setsearchTitle(searchTitle);
  };

  const retrieveEvent = () => {
    EventDataService.getAll()
      .then(response => {
        setEvent(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEvent();
    setCurrentEvent(null);
    setCurrentIndex(-1);
  };

  const setActiveEvent = (event, index) => {
    setCurrentEvent(event);
    setCurrentIndex(index);
    navigate("/event/" + event.id);
  };

  // const removeAllEvent = () => {
  //   EventDataService.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // const findByTitle = () => {
  //   EventDataService.findByTitle(searchTitle)
  //     .then(response => {
  //       setEvent(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const navigate = useNavigate();

  const addPage = () => {
    navigate("/addEvent");
  }


  return (
    <>
      <div className="list row">
        <div className="col-md-8">
          {showAdminBoard && (
            <div className="create-event-div">
              <button
                className="add-button"
                type="button"
                onClick={addPage}
              >
                Crear nuevo evento
              </button>

            </div>
          )}

          {/* <div className="input-group mb-3">
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
        </div> */}
        </div>

        {/* aqui empieza la lista de eventos */}

        <div className="col-md-6">
          <h4>Event List</h4>

          <ul className="list-group">
            {event &&
              event.map((event, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveEvent(event, index)}
                  key={index}
                >
                  <div>
                    <div>
                      {event.title}
                    </div>
                    <div>
                      {event.location}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* aqui termina la lista de eventos */}

        <div className="col-md-6">
          {currentEvent ? (
            <div>
              <Link
                to={"/event/" + currentEvent.id}
                className="badge badge-warning"
              >
              </Link>
            </div>
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventList;

