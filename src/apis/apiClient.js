import axios from "axios";
// import { API } from "../constants";
// import Storage from "../storage";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiZWQwNjEzLTdlMmUtNGE4MC1hNmRmLWIzMTJlODM3M2IyMiIsImlhdCI6MTYxODA2MTQ3MCwiZXhwIjoxNjE4MTQ3ODcwfQ.MniStf3BPb3sGuW3eF9CPBpV46PlvywlCLk36eFuKBo"
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