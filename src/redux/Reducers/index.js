import { combineReducers } from "@reduxjs/toolkit";
import authMeReducer from "./authMeReducer";
import playlistReducer from "./playlistReducer";
import topItemsReducer from "./topItemsReducer";
import albumReducer from "./albumReducer";

export default combineReducers({
    auth: authMeReducer,
    playlist: playlistReducer,
    topItems: topItemsReducer,
    album: albumReducer
})