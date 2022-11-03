import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    addOneToCounter: (state, action) => {
      state.counter += 1;
    },
    minusOneCounter: (state, action) => {
      state.counter -= 1;
    },
    addPayloadToCounter: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const counterSliceActions = counterSlice.actions;

export default counterSlice.reducer;
