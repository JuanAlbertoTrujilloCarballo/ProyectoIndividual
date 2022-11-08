import React, { useState } from "react";
import EventDataService from "../../service/dbService";

const AddEvent = () => {
  const initialEventState = {
    id: null,
    initialHour: "",
    finalHour: "",
    location: "",
    title: "",
    descrpition: "",
    tags: "",
  };
  const [event, setEvent] = useState(initialEventState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...event, [name]: value });
  };

  const saveEvent = () => {
    console.log("hola");
    var data = JSON.stringify( {
      name: event.name,
      title: event.title,
      weakness: event.weakness,
      url: event.url
    });

    EventDataService.create(data)
      .then(response => {
        setEvent({
          id: response.data.id,
          name: response.data.name,
          title: response.data.title,
          weakness: response.data.weakness,
          url: response.data.url
        });
        console.log("name "+data.name);
        console.log("title "+data.title);
        console.log("weakness "+data.weakness);
        console.log("url "+data.url);
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
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEvent}>
            Add
          </button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={event.name}
              onChange={handleInputChange}
              name="name"
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
            <label htmlFor="weakness">Weakness</label>
            <input
              type="text"
              className="form-control"
              id="weakness"
              required
              value={event.weakness}
              onChange={handleInputChange}
              name="weakness"
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input
              type="text"
              className="form-control"
              id="url"
              required
              value={event.url}
              onChange={handleInputChange}
              name="url"
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