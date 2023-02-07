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
    attendance: [],
  };

  const [currentEvent, setCurrentEvent] = useState(initialEventState);
  const [message, setMessage] = useState("");

  const getEvent = id => {
    EventDataService.get(id)
      .then(response => {
        setCurrentEvent(response.data);
        console.log(response.data);
        console.log("id " + currentEvent.attendance.id);
      })
      .catch(e => {
        console.log(e);
      });
  };

  let InitialDateTime = currentEvent.initialHour.split('T');
  let FinalDateTime = currentEvent.finalHour.split('T');
  let comprobarAttendance = currentEvent.attendance.length

  useEffect(() => {
    if (id)
      getEvent(id);
  }, [id]);

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

  const deleteUserInEvent = () => {
    EventDataService.userOutEvent(currentEvent.id, currentUser.id)
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
              <strong>Fecha Inicial:</strong>
            </label>{" "}
            {InitialDateTime[0] + " " + InitialDateTime[1]}
          </div>

          <div className="element">
            <label>
              <strong>Fecha Final:</strong>
            </label>{" "}
            {FinalDateTime[0] + " " + FinalDateTime[1]}
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
              {currentEvent.attendance.length === 0 ?
                <button
                  className="sign-event-button"
                  type="button"
                  onClick={postUserInEvent}
                >
                  Apuntarse
                </button>
                :
                <div />
              }
            </div>
          )}

          {currentUser && (
            <div className="sign-event">
              {currentEvent.attendance.map((attendance) => (
                (attendance.id !== currentUser.id ?
                  <button
                    className="sign-event-button"
                    type="button"
                    onClick={postUserInEvent}
                  >
                    Apuntarse
                  </button>
                  :
                  <button
                    className="sign-event-button"
                    type="button"
                    onClick={deleteUserInEvent}
                  >
                    Quitarse
                  </button>
                )
              ))}
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


