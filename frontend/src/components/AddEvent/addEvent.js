import React, { useState, useEffect, useRef } from "react";
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

//la de abajo no me funciona no se porque

const vlocation = (value) => {
  if (value.length < 6 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        La localizacion debe tener entre 6 y 20 caracteres.
      </div>
    );
  }
};

const vtitle = (value) => {
  if (value.length < 6 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        El titulo debe tener entre 6 y 20 caracteres.
      </div>
    );
  }
};

const vdescription = (value) => {
  console.log("hola")
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Debe tener de 3 a 20 caracteres.
      </div>
    );
  }
};

// const vage = (value) => {
//   if (value.length < 1 || value.length > 2) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         Debe tener entre 1 y 2 numeros
//       </div>
//     );
//   }
// };

const AddEvent = () => {

  const form = useRef();
  const checkBtn = useRef();

  const initialEventState = {
    id: null,
    initialHour: "",
    finalHour: "",
    location: "",
    title: "",
    description: "",
    speaker: ""
  };
  const [Event, setEvent] = useState(initialEventState);
  const [speaker, setSpeaker] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...Event, [name]: value });
  };

  const handleSelectChange = e => {
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


  const handleEvent = (e) => {
    e.preventDefault();

    setMessage("");
    setSubmitted(false);

    form.current.validateAll();

    var data = {
      id: Event.id,
      initialHour: Event.initialHour,
      finalHour: Event.finalHour,
      location: Event.location,
      title: Event.title,
      description: Event.description,
      speaker: Event.speaker
    };

    if (checkBtn.current.context._errors.length === 0) {
      EventDataService.create(data)
        .then(response => {
          setMessage(response.data.message);
          setEvent({
            id: response.data.id,
            initialHour: response.data.initialHour,
            finalHour: response.data.finalHour,
            location: response.data.location,
            title: response.data.title,
            description: response.data.description,
            speaker: response.data.speaker,
          })
          setSubmitted(true);
        },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setSubmitted(false);
            setMessage(resMessage);
          }
        );
    }
  };

  // const saveEvent = () => {
  //   var data = {
  //     id: Event.id,
  //     initialHour: Event.initialHour,
  //     finalHour: Event.finalHour,
  //     location: Event.location,
  //     title: Event.title,
  //     description: Event.description,
  //     speaker: Event.speaker
  //   };

  //   EventDataService.create(data)
  //     .then(response => {
  //       setEvent({
  //         id: response.data.id,
  //         initialHour: response.data.initialHour,
  //         finalHour: response.data.finalHour,
  //         location: response.data.location,
  //         title: response.data.title,
  //         description: response.data.description,
  //         speaker: response.data.speaker,
  //       });
  //       setSubmitted(true);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

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
          <Form onSubmit={handleEvent} ref={form}>
            <div className="form-group">
              <label htmlFor="initialHour">Hora Inicial</label>
              <input
                type="datetime-local"
                className="form-control"
                id="initialHour"
                required
                value={Event.initialHour}
                onChange={handleInputChange}
                validations={[required]}
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
                value={Event.location}
                onChange={handleInputChange}
                name="location"
                validations={[required, vlocation]}
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
                validations={[required, vtitle]}
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
                validations={[required, vdescription]}
              />
            </div>


            <div className="form-group">
              <label htmlFor="description">Ponente</label>
              <select
                id="speaker"
                name="speaker"
                className="form-control"
                onChange={handleSelectChange}
                validations={[required]}>
                <option>- -</option>
                {speaker.map((speaker, index) => (
                  <option key={index} value={speaker.idSpeaker}>{speaker.name}</option>
                ))}
              </select>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            <button className="btn btn-success">
              Submit
            </button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      )}
    </div>

  );
};

export default AddEvent;