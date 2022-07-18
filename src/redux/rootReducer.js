import { combineReducers } from "redux";
import reducer from "./exchange/reducer";

export default combineReducers({
  exchange: reducer
});