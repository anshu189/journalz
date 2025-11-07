import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./Slices/DashboardSlice";
import sessionsReducer from "./Slices/SessionSlice";

const appstore = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sessions: sessionsReducer,
  },
});

export default appstore;
