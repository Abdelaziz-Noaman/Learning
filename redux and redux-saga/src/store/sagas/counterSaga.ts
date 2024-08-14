import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slices/counterSlice";

function* fetchDataSaga(): SagaIterator {
  try {
    const response = yield call(
      fetch,
      "https://dummyjson.com/c/2294-f274-4960-84c6"
    );
    console.log("🚀 ~ function*fetchDataSaga ~ response:", response);
    const { data } = yield response.json();
    console.log("Fetched data:", data); // Check what is being fetched

    if (response.ok) {
      console.log("Response is OK, dispatching success action");
      yield put(fetchDataSuccess(data));
    } else {
      console.log("Response not OK, dispatching failure action");
      yield put(fetchDataFailure("Failed to fetch data"));
    }
  } catch (error: any) {
    console.log("Error caught in saga:", error);
    yield put(fetchDataFailure(error.toString()));
  }
}

export function* watchFetchData() {
  yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}
