import React, { useState } from "react";
import EventDataService from "../../service/eventService";

const AddEvent = () => {
  const initialEventState = {
    id: null,
    initialHour: "",
    finalHour: "",
    location: "",
    title: "",
    description: "",

  };
  const [event, setEvent] = useState(initialEventState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...event, [name]: value });
  };

  const saveEvent = () => {
    console.log("hola");
    var data = {
      id: event.id,
      initialHour: event.initialHour,
      finalHour: event.finalHour,
      location: event.location,
      title: event.title,
      description: event.description,
    };

    EventDataService.create(data)
      .then(response => {
        setEvent({
          id: response.data.id,
          initialHour: response.data.initialHour,
          finalHour: response.data.finalHour,
          location: response.data.location,
          title: response.data.title,
          description: response.data.description,
        });
        console.log("title " + data.title);
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEvent = () => {
    setEvent(initialEventState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Lo enviaste correctamente!</h4>
          <button className="btn btn-success" onClick={newEvent}>
            Añadir Otro
          </button>
        </div>
      ) : (
        <div>
{/* 
          <div className="form-group">
            <label htmlFor="initialHour">Hora Inicial</label>
            <input
              type="text"
              className="form-control"
              id="initialHour"
              required
              value={event.initialHour}
              onChange={handleInputChange}
              name="initialHour"
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="finalHour">Hora Final</label>
            <input
              type="text"
              className="form-control"
              id="finalHour"
              required
              value={event.weakness}
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
              value={event.location}
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
              value={event.title}
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
              value={event.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveEvent} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEvent;