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
  dataToSend.append("title", data.title);
  dataToSend.append("initialHour", data.initialHour);
  dataToSend.append("finalHour", data.finalHour);
  dataToSend.append("location", data.location);
  dataToSend.append("description", data.description);
  dataToSend.append("tags", data.tags);
  return http.post("/event", dataToSend);
};

const update = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("title", data.title);
  dataToSend.append("initialHour", data.initialHour);
  dataToSend.append("finalHour", data.finalHour);
  dataToSend.append("location", data.location);
  dataToSend.append("description", data.description);
  dataToSend.append("tags", data.tags);
  return http.put(`/event/${id}`, dataToSend);
};

const remove = id => {
  return http.delete(`/event/${id}`);
};

const removeAll = () => {
  return http.delete(`/event`);
};

const findByName = name => {
  return http.get(`/event?name=${name}`);
};

const dbService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default dbService;