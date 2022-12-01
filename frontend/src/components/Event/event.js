import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import EventDataService from "../../service/eventService";

const Event = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialEventState = {
    id: null,
    initialHour: "",
    finalHour: "",
    location: "",
    title: "",
    description: "",
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

  const deleteEvent = () => {
    EventDataService.remove(currentEvent.id)
      .then(response => {
        console.log(response.data);
        navigate("/eventList");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (

    <div>
      {currentEvent ? (
        <div className="edit-form">
          <h4>Event</h4>
          <form>
            <div className="form-group">
              <label htmlFor="initialHour">Hora Inicial</label>
              <input
                type="datetime-local"
                className="form-control"
                id="initialHour"
                required
                value={currentEvent.initialHour}
                onChange={handleInputChange}
                name="initialHour"
              />
            </div>

            <div className="form-group">
              <label htmlFor="finalHour">Hora Final</label>
              <input
                type="datetime-local"
                className="form-control"
                id="finalHour"
                required
                value={currentEvent.weakness}
                onChange={handleInputChange}
                name="finalHour"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                required
                value={currentEvent.location}
                onChange={handleInputChange}
                name="location"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentEvent.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={currentEvent.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>
          </form>
          {/* <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentEvent.url ? "Published" : "Pending"}
            </div>
         

          {currentEvent.url ? (
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

          <button className="badge badge-danger mr-2" onClick={deleteEvent}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateEvent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Event...</p>
        </div>
      )}
    </div>

  );
};

export default Event;