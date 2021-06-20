import axios from "axios";
import url from "./URLS";

const api = axios.create({
  baseURL: url,
});

export const getUsers = () => api.get(`/Users`);
export const deleteUser = (user) => api.delete(`/Users/${id}`, user);
export const createUser = (user) => api.post(`/Users/create`, user);
export const getJournals = () => api.get(`/Journals`);

const apis = {
  getUsers,
  deleteUser,
  createUser,
  getJournals,
};

export default apis;
