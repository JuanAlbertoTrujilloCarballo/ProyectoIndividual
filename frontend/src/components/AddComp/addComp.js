import React, { useState } from "react";
import MonsterDataService from "../../service/dbService";

const AddMonster = () => {
  const initialMonsterState = {
    id: null,
    name: "",
    title: "",
    weakness: "",
    url: "",
  };
  const [monster, setMonster] = useState(initialMonsterState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMonster({ ...monster, [name]: value });
  };

  const saveMonster = () => {
    console.log("hola");
    var data = JSON.stringify( {
      name: monster.name,
      title: monster.title,
      weakness: monster.weakness,
      url: monster.url
    });

    MonsterDataService.create(data)
      .then(response => {
        setMonster({
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

  const newMonster = () => {
    setMonster(initialMonsterState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMonster}>
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
              value={monster.name}
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
              value={monster.title}
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
              value={monster.weakness}
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
              value={monster.url}
              onChange={handleInputChange}
              name="url"
            />
          </div>

          <button onClick={saveMonster} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMonster;