import axios from "axios"
import { setUser, setToken } from "../Reducers/authMeReducer"

export const me = (callback) => async(dispatch, getState) =>{
    try {
        const {token} = getState().auth

        const result = await axios.get(
            `${process.env.REACT_APP_ME_API}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        dispatch(setUser(result.data))
    } catch (error) {
        if(error.status === 401){
            localStorage.removeItem("token")
            dispatch(setToken(null))
            callback(error.status)
        }
    }
}