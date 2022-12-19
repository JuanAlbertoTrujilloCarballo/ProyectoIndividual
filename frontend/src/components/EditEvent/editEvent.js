import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import EventDataService from "../../service/eventService";
import SpeakerDataService from "../../service/speakerService";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es requerido!
      </div>
    );
  }
};

const EditEvent = props => {
  const { id } = useParams();
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();


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
  const [speaker, setSpeaker] = useState([]);
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

  const handleSelectChange = e => {
    // const { name, value } = e.target;
    // setSpeaker({ ...speaker, [name]: value });
    // setSpeaker(e.target.value);
    if (e.target.value != "- -") {
      setCurrentEvent({ ...currentEvent, speaker: e.target.value });
      console.log(currentEvent);
    }
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


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEvent({ ...currentEvent, [name]: value });
  };




  const updateEvent = (e) => {
    e.preventDefault();

    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      EventDataService.update(currentEvent.id, currentEvent)
        .then(response => {
          console.log(response.data);
          setMessage("The event was updated successfully!");
          navigate("/eventList");
        },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setMessage(resMessage);
          }
        );
    }
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
          <Form onSubmit={updateEvent} ref={form}>
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
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="finalHour">Hora Final</label>
              <input
                type="datetime-local"
                className="form-control"
                id="finalHour"
                required
                value={currentEvent.finalHour}
                onChange={handleInputChange}
                name="finalHour"
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
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
                validations={[required]}
              />
            </div>


            <div className="form-group">
              <label htmlFor="description">Ponente</label>
              <select
                id="speaker"
                name="speaker"
                className="form-control"
                onChange={handleSelectChange}>
                <option>- -</option>
                {speaker.map((speaker, index) => (
                  <>
                    <option key={index} value={speaker.idSpeaker}>{speaker.name}</option>
                  </>

                ))}
              </select>
            </div>

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


            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            <button className="badge badge-success">
              Editar
            </button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
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

export default EditEvent;