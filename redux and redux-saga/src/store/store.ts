import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as originalUseDispatch,
  TypedUseSelectorHook,
  useSelector,
} from "react-redux";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => originalUseDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
