import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  useDispatch as originalUseDispatch,
  TypedUseSelectorHook,
  useSelector,
} from "react-redux";

import counterSlice from "./slices/counterSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => originalUseDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
