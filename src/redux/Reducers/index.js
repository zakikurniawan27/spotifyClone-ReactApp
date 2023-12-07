import { combineReducers } from "@reduxjs/toolkit";
import authMeReducer from "./authMeReducer";
import playlistReducer from "./playlistReducer";
import topItemsReducer from "./topItemsReducer";
import albumReducer from "./albumReducer";
import artistReducer from "./artistReducer";
import categoriReducer from "./categoriReducer";

export default combineReducers({
    auth: authMeReducer,
    playlist: playlistReducer,
    topItems: topItemsReducer,
    album: albumReducer,
    artist: artistReducer,
    categoris: categoriReducer
})