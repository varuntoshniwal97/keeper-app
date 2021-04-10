import axios from "axios";
// import { API } from "../constants";
// import Storage from "../storage";

const apiClient = axios.create({
  baseURL: "https://xn9d2q9c44.execute-api.ap-south-1.amazonaws.com/dev",
  headers: {
    "Content-Type": "application/json",
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