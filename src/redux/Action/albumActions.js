import axios from "axios"
import { getAlbumNewRelease } from "../Reducers/albumReducer"

export const getAlbumNew = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `https://api.spotify.com/v1/browse/new-releases?limit=6`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        dispatch(getAlbumNewRelease(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}