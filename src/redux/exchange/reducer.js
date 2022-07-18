import { handleActions } from "redux-actions";
import {
  getExchange,
  setExchange
} from "./action";

const DEFAULT_STATE = {
  currentSymbol: "",
  value: null,
  status: ''
};

const handlers = {
  [getExchange]: state => ({ ...state, status: "PENDING" }),

  [setExchange]: (state, action) => {
    if (action.error) {
      return { ...state, status: "ERROR" };
    }

    const data = { ...action.payload };
    return { ...state, status: "DONE", value: data };
  },
};

export default handleActions(handlers, DEFAULT_STATE);
