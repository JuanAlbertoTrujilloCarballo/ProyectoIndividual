import http from "./http-common";

const update = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("age", data.age);
  dataToSend.append("dni", data.dni);
  dataToSend.append("name", data.name);
  dataToSend.append("password", data.password);
  dataToSend.append("phone", data.phone);
  dataToSend.append("username", data.username);
  return http.put(`/user/${id}`, dataToSend);
};

const remove = id => {
  return http.delete(`/user/${id}`);
};
const UserService = {
  update,
  remove
};

export default UserService;