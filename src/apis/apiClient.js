import axios from "axios";
// import { API } from "../constants";
// import Storage from "../storage";
const token = localStorage.getItem("token");
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "authorization": token
  },
});

// const data = "/createClass/:sellerId"

// function addApiToken(config) {
//   const sessionToken = "";
//   config["headers"]["x-access-token"] = sessionToken;
//   return config;
// }

// apiClient.interceptors.request.use(
//   config => addApiToken(config),
//   error => error,
// );

export default apiClient;