import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    sessionidcounter: 1,
    sessions: [],
    newsessionmodal: false,
  },
  reducers: {
    addSession: (state, action) => {
      state.sessions.push(action.payload);
    },
    removeSession: (state, action) => {
      state.sessions = state.sessions.filter(
        (session) => session.id !== action.payload.id
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
    addSessionIdCounter: (state) => {
      state.sessionidcounter += 1;
    },
    removeSessionIdCounter: (state) => {
      state.sessionidcounter -= 1;
    },
  },
});

export const {
  addSession,
  removeSession,
  clearSession,
  sessionModalToggle,
  addSessionIdCounter,
  removeSessionIdCounter,
} = DashboardSlice.actions;
export default DashboardSlice.reducer;
