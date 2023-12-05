import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    track: null,
    artis: null


}

const topItemsSlicer = createSlice({
    name:'topItems',
    initialState,
    reducers:{
        getTrack: (state, action) =>{
            state.track = action.payload
        },
        getArtis: (state, action) =>{
            state.artis = action.payload
        }
    }
})

export const {getTrack, getArtis} = topItemsSlicer.actions
export default topItemsSlicer.reducer