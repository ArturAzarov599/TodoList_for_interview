import {combineReducers} from "redux";
import {Reducer} from "./Reducer";
import {listReducer} from "./listReducer";

export const rootReducer = combineReducers({
    toggleClass: Reducer,
    taskList: listReducer
})
