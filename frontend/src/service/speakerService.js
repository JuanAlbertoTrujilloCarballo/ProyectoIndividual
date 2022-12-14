import http from "./http-common";

const getAll = () => {
  return http.get("/speaker");
};

const get = id => {
  return http.get(`/speaker/${id}`);
};


const speakerService = {
  getAll,
  get
};

export default speakerService;