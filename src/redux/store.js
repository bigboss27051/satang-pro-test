import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [];

if (middleware.length > 0) {
  enhancers.push(applyMiddleware(...middleware));
}

const store = createStore(rootReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
