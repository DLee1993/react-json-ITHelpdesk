import { combineReducers } from "redux";
import logReducerSwitch from "./logReducer";

export default combineReducers({
    log: logReducerSwitch
});
