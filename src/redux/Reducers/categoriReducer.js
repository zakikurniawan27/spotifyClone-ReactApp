import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoris: null
}

export const categorisSlice = createSlice({
    name:'categoris',
    initialState,
    reducers:{
        getCurrentCategoris: (state, actions) =>{
            state.categoris = actions.payload
        }
    }
})

export const {getCurrentCategoris} = categorisSlice.actions
export default categorisSlice.reducer 