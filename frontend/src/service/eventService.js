import http from "./http-common";

const getAll = () => {
  return http.get("/event");
};

const get = id => {
  return http.get(`/event/${id}`);
};

const create = data => {
  // var FormData = require('form-data');
  let dataToSend = new FormData();
  dataToSend.append("initialHour", data.initialHour);
  dataToSend.append("finalHour", data.finalHour);
  dataToSend.append("location", data.location);
  dataToSend.append("title", data.title);
  dataToSend.append("description", data.description);
  return http.post("/event", dataToSend);
};

const update = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("title", data.title);
  dataToSend.append("initialHour", data.initialHour);
  dataToSend.append("finalHour", data.finalHour);
  dataToSend.append("location", data.location);
  dataToSend.append("description", data.description);
  return http.put(`/editEvent/${id}`, dataToSend);
};

const userInEvent = (id, userId )=> {
  return http.post(`/event/${id}/user${userId}`);
}

const remove = id => {
  return http.delete(`/event/${id}`);
};

const findByName = name => {
  return http.get(`/event?name=${name}`);
};

const eventService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
  userInEvent
};

export default eventService;