import { all, takeLatest, call, put } from "redux-saga/effects";

import { getExchange, setExchange } from "./action";

import { getExchange as getExchangeQuery } from "./query";

export function* getExchangeSaga(action) {
  try {
    const { data } = yield call(getExchangeQuery);
    const result = data.length > 0 ? data.filter(data => data.symbol === action.payload) : null;
    yield put(setExchange(result));
  } catch (err) {
    yield put(setExchange(err));
  }
}

export default function* postsManagerSaga() {
  yield all([takeLatest(getExchange, getExchangeSaga)]);
}
