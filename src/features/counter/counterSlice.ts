import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    decrementBy: (state, action) => {
      state.count -= action.payload;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy, decrementBy, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
