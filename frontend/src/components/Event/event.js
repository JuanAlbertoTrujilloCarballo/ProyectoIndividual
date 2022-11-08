import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import EventDataService from "../../service/dbService";

const Event = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialEventState = {
    id: null,
    name: "",
    title: "",
    weakness: "",
    url: "",
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
      name: currentEvent.name,
      title: currentEvent.title,
      weakness: currentEvent.weakness,
      url: currentEvent.url,
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
        navigate("/list");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteEvent = () => {
    EventDataService.remove(currentEvent.id)
      .then(response => {
        console.log(response.data);
        navigate("/list");
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentEvent.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentEvent.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weakness">Weakness</label>
              <input
                type="text"
                className="form-control"
                id="weakness"
                name="weakness"
                value={currentEvent.weakness}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentEvent.url ? "Published" : "Pending"}
            </div>
          </form>

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
          )}

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