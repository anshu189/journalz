import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./Slices/DashboardSlice";

const appstore = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export default appstore;
