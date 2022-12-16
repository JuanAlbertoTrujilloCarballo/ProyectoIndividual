import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import EventDataService from "../../service/eventService";
import "./event.scss"

import AuthService from "../../service/auth.service";

const Event = props => {

  const [showAdminBoard, setAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setAdmin(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const { id } = useParams();
  let navigate = useNavigate();

  const initialEventState = {
    id: null,
    initialHour: "",
    finalHour: "",
    location: "",
    title: "",
    description: "",
    speaker: "",
  };

  const [currentEvent, setCurrentEvent] = useState(initialEventState);
  const [message, setMessage] = useState("");

  const getEvent = id => {
    EventDataService.get(id)
      .then(response => {
        setCurrentEvent(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getEvent(id);
  }, [id]);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEvent({ ...currentEvent, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentEvent.id,
      initialHour: currentEvent.initialHour,
      finalHour: currentEvent.finalHour,
      title: currentEvent.title,
      description: currentEvent.description,
      location: currentEvent.location,
      speaker: currentEvent.speaker,
    };

    EventDataService.update(currentEvent.id, data)
      .then(response => {
        setCurrentEvent({ ...currentEvent, url: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateEvent = () => {
    EventDataService.update(currentEvent.id, currentEvent)
      .then(response => {
        console.log(response.data);
        setMessage("The event was updated successfully!");
        navigate("/eventList");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const editPage = () => {
    navigate("/editEvent/" + currentEvent.id);
  }

  const postUserInEvent = () => {
    EventDataService.userInEvent(currentEvent.id, currentUser.id)
      .then(response => {
        console.log(response.data);
        navigate("/eventList");
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="col-md-6">
      {currentEvent ? (
        <div>
          {/* <h1 className="title">Event</h1> */}
          <div className="title">

            <strong>{currentEvent.title}</strong>
          </div>

          <div className="center-image-event">
          <img src={`data:${currentEvent.typeImg};base64,${currentEvent.image}`}
                          alt=" " className="event-image" />

          </div>

          <div className="element">
            <label>
              <strong>Hora Inicial:</strong>
            </label>{" "}
            {currentEvent.initialHour}
          </div>
          <div className="element">
            <label>
              <strong>Hora Final:</strong>
            </label>{" "}
            {currentEvent.finalHour}
          </div>
           <div className="element">
            <label>
              <strong>Localización:</strong>
            </label>{" "}
            {currentEvent.location}
          </div>
          <div className="element">
            <label>
              <strong>Descripción:</strong>
            </label>{" "}
            {currentEvent.description}
          </div>


          {currentEvent.speaker !== null ? (
            <div className="element">
              <label>
                <strong>Ponente:</strong>
              </label>{" "}
              {currentEvent.speaker.name}
            </div>
          ) : (
            <div />
          )}



          {currentUser && (
            <div className="sign-event">
              <button
                className="sign-event-button"
                type="button"
                onClick={postUserInEvent}
              >
                Apuntarse
              </button>
            </div>
          )}

          {showAdminBoard && (
            <div className="edit-button">
              <button

                type="button"
                onClick={editPage}
              >
                Editar Evento
              </button>
            </div>


          )}

        </div>

      ) : (
        <div>
          <br />
        </div>
      )}
    </div>
  );
};

export default Event;


