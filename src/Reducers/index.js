import { combineReducers } from "redux";
import logReducerSwitch from "./logReducer";
import techReducerSwitch from "./techReducer";

export default combineReducers({
    log: logReducerSwitch,
    tech: techReducerSwitch
});
