import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./Slices/DashboardSlice";
import sessionsReducer from "./Slices/SessionSlice";
import userInfoReducer from "./Slices/userSlice";

const appstore = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    sessions: sessionsReducer,
    userinfo: userInfoReducer,
  },
});

export default appstore;
