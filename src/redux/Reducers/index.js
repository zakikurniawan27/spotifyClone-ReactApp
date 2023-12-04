import { combineReducers } from "@reduxjs/toolkit";
import authMeReducer from "./authMeReducer";

export default combineReducers({
    auth: authMeReducer
})