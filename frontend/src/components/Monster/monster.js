import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import MonsterDataService from "../../service/dbService";

const Monster = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialMonsterState = {
    id: null,
    name: "",
    title: "",
    weakness: "",
    url: "",
  };
  const [currentMonster, setCurrentMonster] = useState(initialMonsterState);
  const [message, setMessage] = useState("");

  const getMonster = id => {
    MonsterDataService.get(id)
      .then(response => {
        setCurrentMonster(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getMonster(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentMonster({ ...currentMonster, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentMonster.id,
      name: currentMonster.name,
      title: currentMonster.title,
      weakness: currentMonster.weakness,
      url: currentMonster.url,
    };

    MonsterDataService.update(currentMonster.id, data)
      .then(response => {
        setCurrentMonster({ ...currentMonster, url: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateMonster = () => {
    MonsterDataService.update(currentMonster.id, currentMonster)
      .then(response => {
        console.log(response.data);
        setMessage("The monster was updated successfully!");
        navigate("/list");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteMonster = () => {
    MonsterDataService.remove(currentMonster.id)
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
      {currentMonster ? (
        <div className="edit-form">
          <h4>Monster</h4>
          <form>
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentMonster.name}
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
                value={currentMonster.title}
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
                value={currentMonster.weakness}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentMonster.url ? "Published" : "Pending"}
            </div>
          </form>

          {currentMonster.url ? (
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

          <button className="badge badge-danger mr-2" onClick={deleteMonster}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateMonster}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Monster...</p>
        </div>
      )}
    </div>

  );
};

export default Monster;