import { createSlice } from "@reduxjs/toolkit";

const initialState = { balance: 1000 };

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    }
  }
});

export const { deposit, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;
