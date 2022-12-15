import React, { useState, useEffect } from "react";
import EventDataService from "../../service/eventService";
import SpeakerDataService from "../../service/speakerService";

const AddEvent = () => {
  const initialEventState = {
    id: null,
    initialHour: "",
    finalHour: "",
    location: "",
    title: "",
    description: "",
    speaker:""
  };
  const [Event, setEvent] = useState(initialEventState);
  const [speaker, setSpeaker] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...Event, [name]: value });
  };

  const handleSelectChange = e => {
    // const { name, value } = e.target;
    // setSpeaker({ ...speaker, [name]: value });
    // setSpeaker(e.target.value);

    setEvent({ ...Event, speaker: e.target.value });
  
  }

  const retrieveSpeaker = () => {
    SpeakerDataService.getAll()
      .then(response => {
        setSpeaker(response.data);
        console.log(response.data);
        console.log("aqui")
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveSpeaker();
  }, []);


  const saveEvent = () => {
    var data = {
      id: Event.id,
      initialHour: Event.initialHour,
      finalHour: Event.finalHour,
      location: Event.location,
      title: Event.title,
      description: Event.description,
      speaker: Event.speaker
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
          speaker: response.data.speaker,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log("hola 3 ");
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

          <div className="form-group">
            <label htmlFor="initialHour">Hora Inicial</label>
            <input
              type="datetime-local"
              className="form-control"
              id="initialHour"
              required
              value={Event.initialHour}
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
              value={Event.finalHour}
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
              value={Event.location}
              onChange={handleInputChange}
              name="location"
              pattern="[A-Za-z]"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Event.title}
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
              value={Event.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>


          <div className="form-group">
            <label htmlFor="description">Ponente</label>
            <select
              id="speaker"
              name="speaker"
              className="form-control"
              onChange={handleSelectChange}>
              {speaker.map((speaker, index) => (
                <option key={index} value={speaker.idSpeaker}>{speaker.name}</option>
              ))}
            </select>
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