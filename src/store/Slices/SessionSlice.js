import { createSlice } from "@reduxjs/toolkit";

const SessionSlice = createSlice({
  name: "session",
  initialState: {
    activesession: "",
    trades: [],
  },
  reducers: {
    addTrade: (state, action) => {
      state.trades.push(action.payload);
    },
    clearTrades: (state) => {
      state.trades.length = 0;
    },
    addactiveSession: (state, action) => {
      state.activesession = action.payload;
    },
    removeactiveSession: (state) => {
      state.activesession = "";
    },
  },
});

export const { addTrade, clearTrades, addactiveSession, removeactiveSession } =
  SessionSlice.actions;
export default SessionSlice.reducer;
