import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL;

const fetch = axios.create();

fetch.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetch;
