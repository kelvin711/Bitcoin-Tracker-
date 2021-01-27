import { combineReducers } from "redux";
import bitcoinReducer from "./bitcoinReducer";

const rootReducer = combineReducers({
    bitcoin: bitcoinReducer
})

export default rootReducer;


//redux has
//action which is a function that returns an object with key type
//reducer which checks what action is called
//dispatch starts by starting an action
//1. dispatch
//2. reducer
//3.checking action
//4.executing action