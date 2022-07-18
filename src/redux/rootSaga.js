import { all } from "redux-saga/effects";
import exchange from "./exchange/saga";

function* rootSaga() {
  yield all([exchange()]);
}

export default rootSaga;