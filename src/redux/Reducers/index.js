import { combineReducers } from "@reduxjs/toolkit";
import authMeReducer from "./authMeReducer";
import playlistReducer from "./playlistReducer";

export default combineReducers({
    auth: authMeReducer,
    playlist: playlistReducer
})