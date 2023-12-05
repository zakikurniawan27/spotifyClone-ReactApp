import axios from "axios";
import { getCurrentLimitPlaylist, getCurrentPlaylist } from "../Reducers/playlistReducer";

export const getPlaylist = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `https://api.spotify.com/v1/me/playlists`,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
            }
        )
        dispatch(getCurrentPlaylist(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getLimitPlaylist = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
            `https://api.spotify.com/v1/me/playlists?offset=0&limit=6`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        dispatch(getCurrentLimitPlaylist(data))
    } catch (error) {
        alert(error.response.data.message)
    }
}