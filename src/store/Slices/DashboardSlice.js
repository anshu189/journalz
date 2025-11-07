import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    sessions: [],
    newsessionmodal: false,
  },
  reducers: {
    addSession: (state, action) => {
      state.sessions.push(action.payload);
    },
    removeSession: (state, action) => {
      state.sessions = state.sessions.filter(
        (session) => session !== action.payload
      );
    },
    clearSession: (state) => {
      state.sessions.length = 0;
    },
    sessionModalToggle: (state, action) => {
      if (typeof action.payload === "boolean") {
        state.newsessionmodal = action.payload;
      } else {
        state.newsessionmodal = !state.newsessionmodal;
      }
    },
  },
});

export const { addSession, removeSession, clearSession, sessionModalToggle } =
  DashboardSlice.actions;
export default DashboardSlice.reducer;
