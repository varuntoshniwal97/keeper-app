import axios from "axios";
// import { API } from "../constants";
// import Storage from "../storage";
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    // "authorization": token
  },
});

apiClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.authorization =  token;
  return config;
}
);

export default apiClient;