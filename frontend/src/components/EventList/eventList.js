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

  const retrieveEvent = () => {
    EventDataService.getAll()
      .then(response => {
        setEvent(response.data);
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

  const navigate = useNavigate();

  const addPage = () => {
    navigate("/addEvent");
  }

  //intento de searchBar
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    // while (searchInput.value >= 0) {}
    if (searchInput.length > 0) {
      let auxEvent = Object.assign(event);
      let result = []
      for(let i = 0; i < auxEvent.length; i++){
        if(auxEvent[i].title.match(searchInput)){
          result.push(auxEvent[i])
        }
      }
      setEvent(result);
    }else if (searchInput.length == 0){
      retrieveEvent();
      setEvent(event);
    }
  },[searchInput]);

  return (
    <>
      <div className="list row">
        <div className="center-list">
          <input
            type="text"
            placeholder="Search here"
            onChange={handleSearch}
            value={searchInput} />
        </div>

        {/* aqui empieza la lista de eventos */}

        <div >
          <div className="center-list">
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
                    <div className="list-event">
                      <div className="col">
                        <img src={`data:${event.typeImg};base64,${event.image}`}
                          alt=" " className="event-list-image" />

                      </div>
                      <div className="event-title">
                        <div>
                          {event.title}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* aqui termina la lista de eventos */}

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
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventList;

