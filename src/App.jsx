import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import store from "./redux/store";
import DashboardHome from "./components/Dashboard/DashboardHome";
import BarChartCard from "./components/Dashboard/BarChartCard";
import ChartCard from "./components/Dashboard/ChartCard";
import KPICard from "./components/Dashboard/KPICard";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Router>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
