import http from "./http-common";

const getAll = () => {
  return http.get("/event");
};

const get = id => {
  return http.get(`/event/${id}`);
};

const create = data => {
  return http.post("/event", data);
};

const update = (id, data) => {
  return http.put(`/event/${id}`, data);
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