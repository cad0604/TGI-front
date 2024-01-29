import axios from "axios";

const api = axios.create({
  baseURL: "/api/resource",
});

export default api;
