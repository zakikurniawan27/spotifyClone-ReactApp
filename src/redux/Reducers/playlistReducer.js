import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlist:null,
    limitPlaylist:null
}

const playlistSlicer = createSlice({
    name:"playlist",
    initialState,
    reducers:{
        getCurrentPlaylist: (state, actions) => {
            state.playlist = actions.payload
        },
        getCurrentLimitPlaylist:(state, actions) => {
            state.playlist = actions.payload
        }
    }
})

export const {getCurrentPlaylist, getCurrentLimitPlaylist} = playlistSlicer.actions
export default playlistSlicer.reducer