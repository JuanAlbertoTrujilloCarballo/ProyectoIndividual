import React, { useState, useEffect } from "react";
import MonsterDataService from "../../service/dbService";
import { Link } from "react-router-dom";

const MonstersList = () => {
  const [monsters, setMonsters] = useState([]);
  const [currentMonster, setCurrentMonster] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMonsters();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveMonsters = () => {
    MonsterDataService.getAll()
      .then(response => {
        setMonsters(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMonsters();
    setCurrentMonster(null);
    setCurrentIndex(-1);
  };

  const setActiveMonster = (monster, index) => {
    setCurrentMonster(monster);
    setCurrentIndex(index);
  };

  const removeAllMonsters = () => {
    MonsterDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    MonsterDataService.findByTitle(searchTitle)
      .then(response => {
        setMonsters(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (

    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Monsters List</h4>

        <ul className="list-group">
          {monsters &&
            monsters.map((monster, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMonster(monster, index)}
                key={index}
              >
                {monster.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMonsters}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentMonster ? (
          <div>
            <h4>Monster</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentMonster.name}
            </div>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentMonster.title}
            </div>
            <div>
              <label>
                <strong>Weakness:</strong>
              </label>{" "}
              {currentMonster.weakness}
            </div>
            <div>
              <label>
                <strong>Url:</strong>
              </label>{" "}
              {currentMonster.url}
              {/* {currentMonster.url ? "Published" : "Pending"} */}
            </div>

            <Link
              to={"/monsters/" + currentMonster.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Monster...</p>
          </div>
        )}
      </div>
    </div>

  );
};

export default MonstersList;