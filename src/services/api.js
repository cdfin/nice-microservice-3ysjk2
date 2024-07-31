import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      // You might want to use your routing logic here
    }
    return Promise.reject(error);
  }
);

export const fetchDashboardData = () => api.get("/dashboard");
export const fetchKPIData = () => api.get("/kpis");
export const fetchChartData = (chartType) => api.get(`/chart/${chartType}`);

export default api;
