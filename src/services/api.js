import axios from "axios";

const API_BASE_URL = "https://8493-35-140-195-190.ngrok-free.app/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDashboardData = async () => {
  try {
    console.log("Fetching dashboard data from:", `${API_BASE_URL}/dashboard`);
    const response = await api.get("/dashboard");
    console.log("Raw response:", response);
    console.log("Response data type:", typeof response.data);
    console.log("Response data:", JSON.stringify(response.data, null, 2));

    if (typeof response.data === "object" && response.data !== null) {
      console.log("Dashboard data fetched successfully");
      return response.data;
    } else {
      console.error("Unexpected response data format");
      throw new Error("Response is not valid JSON");
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    if (error.response) {
      console.error("Error response:", error.response);
      console.error("Error response data:", error.response.data);
    }
    throw error;
  }
};

export default api;
