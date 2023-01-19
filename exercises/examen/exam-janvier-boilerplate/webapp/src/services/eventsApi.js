import axios from "axios";
const baseUrl = "http://localhost:3001/api/events";

const retrieveAll = () => {
  return axios.get(baseUrl);
};

const create = (newVolume) => {
  return axios.post(baseUrl, newVolume);
};

const remove = (resourceId) => {
  return axios.delete(`${baseUrl}/${resourceId}`);
};

const find = (resourceId) => {
  return axios.get(`${baseUrl}/${resourceId}`);
};

export default { retrieveAll, create, remove, find };
