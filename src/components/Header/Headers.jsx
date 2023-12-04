import { useEffect, useState } from "react"
import ButtonLogin from "../button/ButtonLogin"
import axios from 'axios'

const Headers = ({token, setToken, tokenLocalStorage}) =>{

    const [me, setMe] = useState('')
    const [dropDown, setDropDown] = useState(false)
    

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
    
    const comDropDownOn = () => {
        setDropDown(true)
    }
    const comDropDownOff = () => {
        setDropDown(false)
    }

    return (
        <div className="mt-2 flex justify-end mx-5">
            {!token ? 
            <ButtonLogin token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            :
            <>
                {dropDown === false ? 
                <div className="w-40 h-7 bg-white rounded-md text-lg text-center text-green-600 font-bold cursor-pointer" onClick={()=> comDropDownOn()}>
                   {me?.data?.display_name}
                </div>
                :
                <>
                <div className="w-40 h-7 bg-white rounded-md rounded-b-none text-lg text-center text-green-600 font-bold cursor-pointer" onClick={()=> comDropDownOff()}>
                    {me?.data?.display_name}
                </div>
                <div className="absolute top-11">
                    <div className="w-40 h-7 bg-white rounded-md rounded-t-none text-base text-center cursor-pointer" onClick={()=> logOut()}>
                        <p className="text-slate-600">
                            logOut
                        </p>
                    </div>
                </div>
                </>
                }
            </> 
            }
        </div>
    )
}

export default Headers