import http from "./http-common";

const getAll = () => {
  return http.get("/monsters");
};

const get = id => {
  return http.get(`/monsters/${id}`);
};

const create = data => {
  return http.post("/monsters", data);
};

const update = (id, data) => {
  return http.put(`/monsters/${id}`, data);
};

const remove = id => {
  return http.delete(`/monsters/${id}`);
};

const removeAll = () => {
  return http.delete(`/monsters`);
};

const findByName = name => {
  return http.get(`/monsters?name=${name}`);
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