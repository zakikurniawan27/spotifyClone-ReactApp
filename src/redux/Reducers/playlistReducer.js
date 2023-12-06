import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlist:null,
    limitPlaylist:null,
    featuredPlaylist:null,
}

const playlistSlicer = createSlice({
    name:"playlist",
    initialState,
    reducers:{
        getCurrentPlaylist: (state, actions) => {
            state.playlist = actions.payload
        },
        getCurrentLimitPlaylist:(state, actions) => {
            state.limitPlaylist = actions.payload
        },
        getFeaturedLimitPlaylist:(state, actions) =>{
            state.featuredPlaylist = actions.payload
        }
    }
})

export const {getCurrentPlaylist, getCurrentLimitPlaylist, getFeaturedLimitPlaylist} = playlistSlicer.actions
export default playlistSlicer.reducer