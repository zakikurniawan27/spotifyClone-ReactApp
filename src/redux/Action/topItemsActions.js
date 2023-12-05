import axios from "axios"
import { getTrack } from "../Reducers/topItemsReducer"

export const getTrackItems = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=20&offset=0`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        dispatch(getTrack(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}