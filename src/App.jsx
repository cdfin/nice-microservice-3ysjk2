import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";

import store from "./redux/store";
import DashboardHome from "./components/Dashboard/DashboardHome";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Router>
            <Box sx={{ display: "flex" }}>
              <Header />
              <Sidebar />
              <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, mt: 8, ml: "240px" }}
              >
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
                </Routes>
              </Box>
            </Box>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
