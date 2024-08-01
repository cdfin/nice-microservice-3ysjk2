import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: authReducer,
  },
});

export default store;
