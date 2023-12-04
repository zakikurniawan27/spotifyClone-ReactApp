import { useEffect, useState } from "react"
import ButtonLogin from "../button/ButtonLogin"
import axios from 'axios'

const Headers = ({token, setToken, tokenLocalStorage}) =>{

    const [me, setMe] = useState('')

    

    useEffect(()=>{
        (async() =>{
            if(token){
                try {
                    const result = await axios.get(
                        `${process.env.REACT_APP_ME_API}`,{
                            headers:{
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                    setMe(result) 
                } catch (error) {
                    if(error.status === 401){
                        localStorage.removeItem("token")
                    }
                    console.log(error)
                }
            }
        })()
    },[token])

    const logOut = () =>{
        localStorage.removeItem("token")
        setToken('')
    }

    return (
        <div className="relative mt-2 flex justify-end mx-5">
            {!token ? 
            <ButtonLogin token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            :
            <p className="text-white" onClick={()=> logOut()}>{me?.data?.display_name}</p> 
            }
        </div>
    )
}

export default Headers