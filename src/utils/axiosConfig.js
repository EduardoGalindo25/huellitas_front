import axios from "axios";

const api = axios.create({
  baseURL: "https://volkalabs.ddns.net/api",
});

// Interceptor para agregar el token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
