import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    artist : null,
    artistRelated: null
}

const artistSlicer = createSlice({
    name:"artist",
    initialState,
    reducers:{
        getArtistRelated: (state, actions) =>{
            state.artistRelated = actions.payload
        }
    }
})

export const {getArtistRelated} = artistSlicer.actions
export default artistSlicer.reducer