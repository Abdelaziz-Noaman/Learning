import { all, fork } from "redux-saga/effects";

import { watchFetchData } from "./counterSaga";

export default function* rootSaga() {
  yield all([fork(watchFetchData)]);
}
