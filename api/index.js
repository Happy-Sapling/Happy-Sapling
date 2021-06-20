import axios from "axios";
import url from "./URLS";

const api = axios.create({
  baseURL: url,
});

export const getUsers = () => api.get(`/Users`);
export const createUser = (user) => api.post(`/Users/create`, user);

const apis = {
  getUsers,
  createUser,
};

export default apis;
