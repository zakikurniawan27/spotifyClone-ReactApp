import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    album: null,
    albumNewRelease:null
}

const getAlbumSlicer = createSlice({
    name:"getAlbum",
    initialState,
    reducers:{
        getAlbumNewRelease: (state, action) =>{
            state.albumNewRelease = action.payload
        }
    }
})

export const {getAlbumNewRelease} = getAlbumSlicer.actions
export default getAlbumSlicer.reducer