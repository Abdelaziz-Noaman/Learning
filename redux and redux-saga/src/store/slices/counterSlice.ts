import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dataObj = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

type State = {
  past: number[];
  present: number;
  future: number[];
  data: dataObj[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  past: [],
  present: 0,
  future: [],
  data: [],
  loading: false,
  error: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // For Redux-Saga testing...
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<dataObj[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // For Counter state handling and testing undo and redo...
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

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  increment,
  decrement,
  undo,
  redo,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;
