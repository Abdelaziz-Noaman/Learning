import { createSlice } from "@reduxjs/toolkit";

type State = {
  value: 0;
};

const initialState: State = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    reset: () => initialState,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
