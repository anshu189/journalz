import { createSlice } from "@reduxjs/toolkit";

const SessionSlice = createSlice({
  name: "session",
  initialState: {
    trades: [],
  },
  reducers: {
    addTrade: (state, action) => {
      state.trades.push(action.payload);
    },
    clearTrades: (state) => {
      state.trades.length = 0;
    },
  },
});

export const { addTrade, clearTrades } = SessionSlice.actions;
export default SessionSlice.reducer;
