import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7055/api", // Change to your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;