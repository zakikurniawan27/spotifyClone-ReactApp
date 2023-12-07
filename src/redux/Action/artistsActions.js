import axios from "axios"
import { getArtistRelated } from "../Reducers/artistReducer"

export const getRelatedArtist = (id) => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `https://api.spotify.com/v1/artists/${id}/related-artists`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        dispatch(getArtistRelated(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}