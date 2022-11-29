import React, { useState, useEffect } from "react";
import EventDataService from "../../service/eventService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./eventList.scss"

const EventList = () => {
  const [event, setEvent] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setsearchTitle] = useState("");

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
  };

  const removeAllEvent = () => {
    EventDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    EventDataService.findByTitle(searchTitle)
      .then(response => {
        setEvent(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const navigate = useNavigate();

  const addPage=() => {
    navigate("/addEvent");
  }


  return (

    <div className="list row">
      <div className="col-md-8">
        <div className="create-event-div">
        <button
              className="add-button"
              type="button"
              onClick={addPage}
            >
              Crear nuevo evento
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
                {event.title}
                <p></p>
                {event.tags}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEvent}
        >
          Remove All
        </button>
      </div>

      {/* aqui termina la lista de eventos */}

      <div className="col-md-6">
        {currentEvent ? (
          <div>
            <h4>Event</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentEvent.title}
            </div>
            <div>
              <label>
                <strong>Initial Hour:</strong>
              </label>{" "}
              {currentEvent.initialHour}
            </div>
            <div>
              <label>
                <strong>Final Hour:</strong>
              </label>{" "}
              {currentEvent.finalHour}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentEvent.description}
            </div>

            <Link
              to={"/event/" + currentEvent.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Event...</p>
          </div>
        )}
      </div>
    </div>

  );
};

export default EventList;