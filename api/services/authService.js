import axios from "axios";
import url from "../URLS";

const API_URL = url + "/Users/";

const login = (email, password) => {
  return axios
    .post(API_URL + "signIn", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

export default {
  login,
};
