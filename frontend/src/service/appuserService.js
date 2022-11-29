import http from "./http-common";

const getAll = () => {
  return http.get("/appuser");
};

const get = id => {
  return http.get(`/appuser/${id}`);
};

const create = data => {
  // var FormData = require('form-data');
  let dataToSend = new FormData();
  dataToSend.append("dni", data.dni);
  dataToSend.append("name", data.name);
  dataToSend.append("username", data.username);
  dataToSend.append("password", data.password);
  dataToSend.append("age", data.age);
  dataToSend.append("phone", data.phone);
  dataToSend.append("email", data.email);
  return http.post("/appuser", dataToSend);
};

const update = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("dni", data.dni);
  dataToSend.append("name", data.name);
  dataToSend.append("username", data.username);
  dataToSend.append("password", data.password);
  dataToSend.append("age", data.age);
  dataToSend.append("phone", data.phone);
  dataToSend.append("email", data.email);
  return http.put(`/appuser/${id}`, dataToSend);
};

const remove = id => {
  return http.delete(`/appuser/${id}`);
};

const removeAll = () => {
  return http.delete(`/appuser`);
};

const findByName = name => {
  return http.get(`/appuser?name=${name}`);
};

const appuserService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default appuserService;