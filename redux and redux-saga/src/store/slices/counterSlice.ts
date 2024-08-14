import { createSlice } from "@reduxjs/toolkit";

type State = {
  past: number[];
  present: number;
  future: number[];
};

const initialState: State = {
  past: [],
  present: 0,
  future: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.past.push(state.present);
      state.present += 1;
      state.future = [];
    },
    decrement: (state) => {
      state.past.push(state.present);
      if (state.present > 0) state.present -= 1;
      state.future = [];
    },
    undo: (state) => {
      if (state.past.length > 0) {
        const previousValue = state.past.pop() as number;
        state.future.unshift(state.present);
        state.present = previousValue;
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const nextValue = state.future.shift() as number;
        state.past.push(state.present);
        state.present = nextValue;
      }
    },
    reset: () => initialState,
  },
});

export const { increment, decrement, undo, redo, reset } = counterSlice.actions;
export default counterSlice.reducer;
