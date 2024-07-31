import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
  },
});
