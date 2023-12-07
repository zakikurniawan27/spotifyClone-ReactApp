import axios from "axios"
import { getCurrentCategoris } from "../Reducers/categoriReducer"

export const getCategoris = () => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth
        const {data} = await axios.get(
        `https://api.spotify.com/v1/browse/categories?limit=6`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
    dispatch(getCurrentCategoris(data))   
    } catch (error) {
        alert(error.response.data.message)
    }
}