import axios from "axios";
const baseUrl = "http://localhost:3001/api/children";

const retrieveAll = () => {
  return axios.get(baseUrl);
};

const find = (resourceId) => {
  return axios.get(`${baseUrl}/${resourceId}`);
};

export default { retrieveAll, find };
