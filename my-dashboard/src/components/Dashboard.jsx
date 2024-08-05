import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update this if your backend is on a different port

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchDashboardData = async () => {
  try {
    const response = await api.get("/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};

export const fetchKPIData = async () => {
  try {
    const response = await api.get("/kpis");
    return response.data;
  } catch (error) {
    console.error("Error fetching KPI data:", error);
    throw error;
  }
};

export const fetchChartData = async (chartType) => {
  try {
    const response = await api.get(`/chart/${chartType}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${chartType} chart data:`, error);
    throw error;
  }
};
