import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";

import store from "./redux/store";
import DashboardHome from "./components/Dashboard/DashboardHome";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AnalyticsPage from "./components/Analytics/AnalyticsPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import EmailVerification from "./components/Auth/EmailVerification";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import UserProfile from "./components/Profile/UserProfile";
import Unauthorized from "./components/Auth/Unauthorized";
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
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <DashboardHome />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/analytics"
                    element={
                      <ProtectedRoute>
                        <AnalyticsPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <UserProfile />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                  />
                  <Route
                    path="/verify-email/:token"
                    element={<EmailVerification />}
                  />
                  <Route path="/unauthorized" element={<Unauthorized />} />
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
