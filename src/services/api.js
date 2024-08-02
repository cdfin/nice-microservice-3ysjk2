import axios from "axios";

const API_BASE_URL = "https://2722-35-140-195-190.ngrok-free.app/api";

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

export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data.user;
};

export const register = async (name, email, password) => {
  const response = await api.post("/register", { name, email, password });
  localStorage.setItem("token", response.data.token);
  return response.data.user;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  // In a real application, you'd want to decode the JWT here
  // and return the user information stored in it
  return { id: 1, name: "John Doe", email: "john@example.com" };
};

export const verifyEmail = async (token) => {
  return await api.post("/verify-email", { token });
};

export const requestPasswordReset = async (email) => {
  return await api.post("/request-password-reset", { email });
};

export const resetPassword = async (token, newPassword) => {
  return await api.post("/reset-password", { token, newPassword });
};

export const getUserRole = async (userId) => {
  return await api.get(`/users/${userId}/role`);
};

export const updateUserProfile = async (userId, profileData) => {
  return await api.put(`/users/${userId}`, profileData);
};

export const fetchDashboardData = () => api.get("/dashboard");
export const fetchKPIData = () => api.get("/kpis");
export const fetchChartData = (chartType) => api.get(`/chart/${chartType}`);

export default api;
